const Cache = require("@11ty/eleventy-cache-assets");
const { Client } = require('@notionhq/client');
const notion = new Client({ auth: process.env.NOTION_API_KEY });

require("dotenv").config();


// module.exports = async function () {
//   const databaseId = '4c35402ddd1241d9821482b060ad968f';
//   const response = await notion.databases.retrieve({ database_id: databaseId });
//   // console.log(response);
//   console.log(JSON.stringify(response.properties));
//
// };

module.exports = async function () {
  const databaseId = '4c35402ddd1241d9821482b060ad968f';
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      or: [
        {
          property: 'Publish',
          checkbox: {
            equals: true,
          },
        },
      ],
    },
    sorts: [
      {
        property: 'Name',
        direction: 'ascending',
      },
    ],
  });
  console.log(response.results);
};
