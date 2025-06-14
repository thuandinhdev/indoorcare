const { DateTime } = require("luxon");
const CleanCSS = require("clean-css");
module.exports = function(eleventyConfig) {
  // Định dạng readableDate: "14 June 2025"
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat("dd LLL yyyy");
  });

  // Định dạng machineDate: "2025-06-14"
  eleventyConfig.addFilter("machineDate", (value) => {
    const date = new Date(value);
    return date.toISOString().split("T")[0];
  });

  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
