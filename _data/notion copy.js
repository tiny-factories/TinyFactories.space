// const Cache = require("@11ty/eleventy-cache-assets");
// require("dotenv").config();
//
// const filter = {
//   "filter": {
//       "property": "Publish",
//       "checkbox": {
//           "equals": true
//       }
//   },
//   "sorts": [
//       {
//           "property": "Finish",
//           "direction": "descending"
//       }
//   ]
// }
//
// module.exports = async function () {
//   let url = "https://api.notion.com/v1/databases/4c35402ddd1241d9821482b060ad968f/query"
//
//   let json = await Cache(url, {
//       type: "json",
//       fetchOptions: {
//           method: "POST",
//           headers: {
//               "Authorization": `Bearer ${process.env.NOTION_TOKEN}`,
//               "Notion-Version": "2021-05-13",
//               "Content-Type": "application/json"
//           },
//           body: JSON.stringify(filter)
//       }
//   });
//   console.log(JSON.stringify(json.results))
//
//   return {
//       json
//   };
// };
