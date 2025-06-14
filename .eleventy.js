module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter("machineDate", function(value) {
      const date = new Date(value);
      return date.toISOString().split("T")[0]; // "YYYY-MM-DD"
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
  