require("dotenv").config();

module.exports = {
  mongodburl: process.env.MONGO_URL,
  NOTION_TOKEN: process.env.NOTION_TOKEN,
  TF_MEMBERS_DATABASE_ID: process.env.TF_MEMBERS_DATABASE_ID,
  TF_PROJECTS_DATABASE_ID: process.env.TF_PROJECTS_DATABASE_ID,


};
