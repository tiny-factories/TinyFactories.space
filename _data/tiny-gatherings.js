// const Cache = require("@11ty/eleventy-cache-assets");
// require("dotenv").config();
//
// module.exports = async function () {
//   let Event_DB_URL = `https://api.notion.com/v1/databases/${process.env.TF_EVENTS_DATABASE_ID}/query`;
//
//   let Events = await Cache(Event_DB_URL, {
//     duration: "1d",
//     type: "json",
//     fetchOptions: {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
//         "Notion-Version": "2021-05-13",
//         "Content-Type": "application/json",
//       },
//     },
//   });
//   // for (var j = 0; j < Blogs.results.length; j++) {
//   //   if (Blogs.results[j].properties.HeroImage.files[0]) {
//   //     // console.log("Saving Image");
//   //
//   //     (async () => {
//   //       let url = Members.results[j].properties.HeroImage.files[0].file.url;
//   //       let stats = await Image(url, {
//   //         formats: ["jpeg"],
//   //         removeUrlQueryParams: false,
//   //         filenameFormat: function (id, src, width, format, options) {
//   //           const extension = path.extname(src);
//   //           const name = path.basename(src, extension);
//   //
//   //           return `${name}.${format}`;
//   //         },
//   //       });
//   //       // console.log(stats);
//   //     })();
//   //
//   //     // console.log(Members.results[j].properties.TinyProfile.files[0].file.url);
//   //   } else {
//   //     // console.log("No file Uploaded");
//   //   }
//   // }
//   return {
//     Events,
//   };
// };
