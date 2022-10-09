module.exports = {
  globDirectory: "src/",
  globPatterns: ["**/*.{tsx,mp4,css,ts,pdf}"],
  swDest: "src/service-worker.ts",
  swSrc: "src/service-worker.ts",
  maximumFileSizeToCacheInBytes: 20 * 1024 * 1024,
};
