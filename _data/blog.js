// const Cache = require("@11ty/eleventy-cache-assets");
// const Image = require("@11ty/eleventy-img");
// const path = require("path");
//
// require("dotenv").config();
//
// module.exports = async function () {
//   let Blog_DB_URL = `https://api.notion.com/v1/databases/${process.env.TF_BLOG_DATABASE_ID}/query`;
//   let Blogs = await Cache(Blog_DB_URL, {
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
//
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
//
//   return {
//     Blogs,
//   };
// };
