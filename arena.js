const Arena = require("are.na");
let arena = new Arena({ accessToken: process.env.ARENA_ACCESS_TOKEN });
var arenaChannelName ="inbox-ao3rgbut1z4";
function ArenaGallery(arenaChannelName) {
  arena
    .channel(arenaChannelName)
    .contents({ page: 1, per: 10 })
    .then(contents => {
      // console.log(contents);
      contents.forEach(content => {
        // console.log(content);

       var blockTitle = document.createElement ("p");
       blockTitle.innerHTML = "→ " + content.title;
       blockTitle.className = "imported-text";

       var blockURL = document.createElement ("a");
       blockURL.href = content.source.url;
       blockURL.className = "";

      var blockImg = document.createElement("img");
      blockImg.innerHTML = content.image.square.url;
      blockImg.src = content.image.square.url;
      blockImg.className = "";

      // var blockURL = document.createElement("img");
      // blockURL.src = content.image.square.url;
      // blockURL.className = "squirrel";

      var gallery = document.getElementById ("arena-gallery");
      // gallery.innerHTML = <h1> + blockTitle + </h1> ;
      var newDiv = document.createElement("div");
      newDiv.className = "arena-card fl w-20 pa3 mr2";

      gallery.appendChild (newDiv);

      newDiv.appendChild (blockTitle);
      newDiv.appendChild (blockImg);

      });
    })
    .catch(err => console.log(err));
}