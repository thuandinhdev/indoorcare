const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Filter để định dạng ngày sang dạng dễ đọc: "04 Tháng Sáu 2024"
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("dd LLL yyyy");
  });

  // Nếu mày vẫn cần machineDate như trước:
  eleventyConfig.addFilter("machineDate", (value) => {
    const date = new Date(value);
    return date.toISOString().split("T")[0];
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
