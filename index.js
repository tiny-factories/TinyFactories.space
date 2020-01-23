var nameArray = ["writing", "making", "socializing", "communicating", "reading", "playing", "exploring", "learning"]; //One of those will be randomly chosen

var lastIndex = 0; //Used to remember the last word picked

//This function will get a random INT used later as the array index
function getRandomInt(iMin, iMax) {
    var newIndex = Math.floor(Math.random() * (iMax - iMin)) + iMin;
    while( lastIndex == newIndex ){
        var newIndex = Math.floor(Math.random() * (iMax - iMin)) + iMin;
    }
  lastIndex = newIndex;  

  return newIndex;
}

function pickRandomName() {
    var domHeaderName = document.getElementById("nameChange"); //Put the ID of the DOM element you want to change here
    var randomIndex = getRandomInt(0, nameArray.length);

    //Put the randomly chosen name in the DOM
    domHeaderName.innerHTML = nameArray[randomIndex];
    //loop
    setTimeout(pickRandomName, 2000); //Loop every 2000ms (2s)
}

pickRandomName();

///
var date = new Date().getFullYear();

document.getElementById("year").innerHTML = date;

///


///
/*
 Inspired by https://soulwire.co.uk/
*/

// TODO: revert back to source text after animation is complete
// Don't wrap the <span> around the source text, clone first -> then wrap

const hypertext = (function() {
    function countLines(elem) {
        let lineHeight = window.getComputedStyle(elem, null).getPropertyValue('line-height');

        //     Box Height          Line Height
        return elem.offsetHeight / parseInt(lineHeight);
    }

    function getLines(el) {
        let lineCount = countLines(el);
        let html = el.innerHTML.replace(/(\S+\s*)/g, '<span>$1</span>');

        el.innerHTML = html;

        var offset = 0;
        var spans = document.querySelectorAll('.hypertext span');

        function getLine(index) {
            var top = 0,
                buffer = [];

            for (var i = 0; i < spans.length; i++) {
                if (top > index) {
                    break;
                }

                var newOffset = spans[i].offsetTop;

                if (newOffset !== offset) {
                    offset = newOffset;
                    top++;
                }

                if (top === index) {
                    buffer.push(spans[i]);
                }
            }

            var text = [];

            for (var i = 0; i < buffer.length; i++) {
                text.push(buffer[i]);
            }

            return text;
        }

        var lines = [];

        for (var i = 0; i < lineCount; i++) {
            lines.push(getLine(i + 1));
        }

        return lines;
    }

    function replaceAt(str, index, char) {
        return str.substr(0, index) + char + str.substr(index + char.length);
    }

    let probability = function(n) {
        return !!n && (Math.random() * 10) <= n;
    }

    function hypertextChar(char) {
        return probability(0.65) ? '/' : '-';
    }

    // -------------------------------------------------------------------

    function editChar(el, text) {
        let index = 0;

        const step = setInterval(() => {
            if (text[index] === undefined) return;
            
            el.innerText = replaceAt(el.innerText, index, text[index]);
            index++;

            // If this was the last one, clear the interval
            if (index == text.length) clearInterval(step);
        }, 50);
    }

    function animateChar(el, word) {
        let text = word.innerText.replace(/\s/g, '');
        let index = 0;

        // RESET
        el.innerText = '';

        const step = setInterval(() => {
            el.innerText += hypertextChar(text[index]);
            index++;

            // If this was the last one, clear the interval
            if (index == text.length) {
                clearInterval(step);
                editChar(el, text);
            }
        }, 50);
    }

    function animateLine(args) {
        let { clone, data, index } = args;

        const row = clone.querySelector('.ht-row:nth-of-type(' + index + ')');

        // Start at 0
        let i = 0;

        const step = setInterval(() => {
            let span = document.createElement('span');
            span.classList.add('ht-word');
            
            row.insertAdjacentHTML('beforeend', String.fromCharCode(160));
            row.insertAdjacentElement('beforeend', span);

            // ---------------------------------------------------------

            animateChar(span, data[i]);
            i++;

            if (i == data.length) clearInterval(step);
        }, 130);
    }

    function _renderText(el, settings) {
        // Create a new element based off the 'el' nodeName (eg. 'p')
        const clone = document.createElement(el.nodeName);
        clone.classList.add('hypertext-clone');

        const lines = getLines(el);

        el.style.display = 'none';
        el.insertAdjacentElement('afterend', clone);

        // -------------------------------------------------------------------------

        let i = lines.length;

        while (i--) {
            let div = document.createElement('div');
            div.classList.add('ht-row');

            // TODO: find a better way give .ht-row it's height
            // 	     at the moment a &nbsp is being used... eww
            div.innerHTML = '&nbsp;';

            clone.insertAdjacentElement('beforeend', div);
        }

        // -------------------------------------------------------------------------

        let timing = -50;
        let index = 0;

        let animatedLines = lines.map((data) => {
            timing += 200;

            return setTimeout(() => {
                index++;
                return animateLine({
                    clone,
                    data,
                    index
                });
            }, timing);
        });
    }

    // Handler function
    function init(config) {
        const defaults = {
            'selector': '.hypertext'
        };

        const settings = Object.assign(defaults, config);

        // ----------------------------------------------------

        const elements = document.querySelectorAll(settings.selector);

        return Object.keys(elements).map((key) => {
            return _renderText(elements[key]);
        });
    }

    return {
        init
    };
})();

hypertext.init({
    'selector': '.hypertext'
});
