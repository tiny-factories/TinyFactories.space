const Cache = require("@11ty/eleventy-cache-assets");
const Image = require("@11ty/eleventy-img");
const path = require("path");

require("dotenv").config();

module.exports = async function () {
  let Newsletter_DB_URL = `https://api.notion.com/v1/databases/${process.env.TF_NEWSLETTER_DATABASE_ID}/query`;

  let Newsletters = await Cache(Newsletter_DB_URL, {
    duration: "1d",
    type: "json",
    fetchOptions: {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
        "Notion-Version": "2021-05-13",
        "Content-Type": "application/json",
      },
    },
  });
  for (var j = 0; j < Newsletters.results.length; j++) {
    if (Newsletters.results[j].properties.HeroImage.files[0]) {
      // console.log("Saving Image");

      (async () => {
        let url = Newsletters.results[j].properties.HeroImage.files[0].file.url;
        let stats = await Image(url, {
          formats: ["jpeg"],
          removeUrlQueryParams: false,
          filenameFormat: function (id, src, width, format, options) {
            const extension = path.extname(src);
            const name = path.basename(src, extension);

            return `${name}.${format}`;
          },
        });
        // console.log(stats);
      })();

      // console.log(Newsletters.results[j].properties.HeroImage.files[0].file.url);
    } else {
      // console.log("No file Uploaded");
    }
  }

  return {
    Newsletters,
  };
};
