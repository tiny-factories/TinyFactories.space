require("dotenv").config();

module.exports = async function () {
  if (process.env.UMAMI === true)
    [
      <script
        async
        defer
        data-website-id='2b6c9aa0-e9b8-48b1-bf84-7f599b652913'
        src='https://umami.tinyfactories.space/umami.js'
      ></script>,
      // console.log("TRUE"),
    ];
  // console.log("FALSE");
};
