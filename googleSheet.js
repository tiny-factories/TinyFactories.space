

/*————Fetching Google Docs Sheet as JSON data ————

1. Make Google Sheets
2. Retrieve your Google Sheet Unique ID from your browser.

    (example) In the link below it is "11vrOURAifSzQMIOYcHjq2HFlgqni7jEKjJd3JrZqOew"
    https://docs.google.com/spreadsheets/d/11vrOURAifSzQMIOYcHjq2HFlgqni7jEKjJd3JrZqOew/edit#gid=0

3. From [Files -> Publish to Web] pulish the sheet to web.

4. Put your ID in the link format below to retrieve JSON data

    https://spreadsheets.google.com/feeds/list/ YOUR ID GOES HERE /1/public/values?alt=json

5. Check if you can retrieve JSON data!

Good tutorial to follow : https://medium.com/dali-lab/google-sheets-and-json-easy-backend-e29e9ef3df2

————————— Enjoy Coding from Tomo! ٩(ˊᗜˋ*)و  ———————————— */

const sheetUrl = "https://spreadsheets.google.com/feeds/list/11vrOURAifSzQMIOYcHjq2HFlgqni7jEKjJd3JrZqOew/1/public/values?alt=json"

//The array which we will put the data in.
let googleSheet = [];
let column_A = []; 
let column_B = []; 
let column_C = []; 


//Fetching Google Sheet
fetch(sheetUrl)
    .then(function(response){
            return response.json();
    })
    .then(function(data){
        googleSheet = data.feed.entry;
        console.log(googleSheet);
        
        for (var i = 0; i < googleSheet.length; i += 1){
            column_A.push(googleSheet[i].gsx$date.$t);
            column_B.push(googleSheet[i].gsx$description.$t);
            column_C.push(googleSheet[i].gsx$title.$t);
        }  
        console.log("Loaded Google Sheets -> Length of Row :" + googleSheet.length)
        //Trigger Initialize content
        updateHtml();

    }).catch(function(){
        console.log("Oh no, Can't load Google Docs!");
    })


updateHtml= () =>{
    for(var i = googleSheet.length - 1 ; i >= 0 ; i--){

        console.log(column_A[i] + "Current Num :" + i);
        console.log(column_B[i] + "Current Num :" + i);
        console.log(column_C[i] + "Current Num :" + i);

        
        //Create element <p> with the custom class 
        var textA = document.createElement("p");
        textA.className = "gSheet_date";
        
        var textB = document.createElement("p");
        textB.className = "gSheet_text";
      
        var textC = document.createElement("h4");
        textC.className = "gSheet_title";

        //Gets the data from JSON and .createTextNode puts it into the textA <p> element
        textA.appendChild(document.createTextNode(column_A[i]));
        textB.appendChild(document.createTextNode(column_B[i]));
        textC.appendChild(document.createTextNode(column_C[i]));

        //Gets div element sheet Update and add the texts
        var element = document.getElementById("sheetUpdate");
        
        element.appendChild(textC);
        element.appendChild(textB);
        element.appendChild(textA);
      

    }
}


