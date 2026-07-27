const glyphs = {
  sun: `<svg class="glyph" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="20" cy="20" r="7" stroke="#5B6B4F" stroke-width="1.5"/><g stroke="#5B6B4F" stroke-width="1.5" stroke-linecap="round"><line x1="20" y1="4" x2="20" y2="9"/><line x1="20" y1="31" x2="20" y2="36"/><line x1="4" y1="20" x2="9" y2="20"/><line x1="31" y1="20" x2="36" y2="20"/><line x1="9.2" y1="9.2" x2="12.6" y2="12.6"/><line x1="27.4" y1="27.4" x2="30.8" y2="30.8"/><line x1="9.2" y1="30.8" x2="12.6" y2="27.4"/><line x1="27.4" y1="12.6" x2="30.8" y2="9.2"/></g></svg>`,
  cloud: `<svg class="glyph" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M11 26a6 6 0 0 1-1-11.9 8 8 0 0 1 15.4-2.7A6.5 6.5 0 0 1 29 24.5" stroke="#5B6B4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><line x1="11" y1="26" x2="29" y2="26" stroke="#5B6B4F" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  rain: `<svg class="glyph" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M11 22a6 6 0 0 1-1-11.9 8 8 0 0 1 15.4-2.7A6.5 6.5 0 0 1 29 20.5" stroke="#5B6B4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><g stroke="#7C4B57" stroke-width="1.5" stroke-linecap="round"><line x1="14" y1="27" x2="12" y2="33"/><line x1="20" y1="27" x2="18" y2="33"/><line x1="26" y1="27" x2="24" y2="33"/></g></svg>`,
  pray: `<svg class="glyph" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M15 33c0-9 0-16 1-20 1.5-4 3-6 4-7 1 1 2.5 3 4 7 1 4 1 11 1 20" stroke="#5B6B4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 33c-2-1-3.5-3-4-6M25 33c2-1 3.5-3 4-6" stroke="#5B6B4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><line x1="20" y1="9" x2="20" y2="30" stroke="#5B6B4F" stroke-width="1.5" stroke-linecap="round"/><line x1="14" y1="33" x2="26" y2="33" stroke="#5B6B4F" stroke-width="1.5" stroke-linecap="round"/></svg>`
};

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("admin");

  eleventyConfig.addCollection("entries", function (collectionApi) {
    return collectionApi.getFilteredByGlob("content/entries/*.md").sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addShortcode("moodGlyph", function (mood) {
    return glyphs[mood] || glyphs.sun;
  });

  eleventyConfig.addFilter("readableDate", function (date) {
    return new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
