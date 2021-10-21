const Cache = require("@11ty/eleventy-cache-assets");
require("dotenv").config();

module.exports = async function () {

  let Projects_DB_URL = `https://api.notion.com/v1/databases/${process.env.TF_PROJECTS_DATABASE_ID}/query`
  let Projects = await Cache(Projects_DB_URL, {
      duration: "1d",
      type: "json",
      fetchOptions: {
          method: "POST",
          headers: {
              "Authorization": `Bearer ${process.env.NOTION_TOKEN}`,
              "Notion-Version": "2021-05-13",
              "Content-Type": "application/json"
          },
      }
  });
  return {
      Projects
  };
};