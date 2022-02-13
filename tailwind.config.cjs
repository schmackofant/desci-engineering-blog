module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
  ],
  // temporary workaround so css doesn't get purged in dev environment
  safelist: process.env.NODE_ENV === "development" ? [{ pattern: /.*/ }] : [],
};