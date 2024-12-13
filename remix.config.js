// remix.config.js
const { createNetlifyAdapter } = require("@remix-run/netlify");

module.exports = {
  appDirectory: "app",
  assetsBuildDirectory: "build/client/assets",
  publicPath: "/assets/",
  serverBuildPath: "build/server/index.js",
  future: {
    v2_meta: true, // Adjust based on your Remix version and requirements
  },
  adapter: createNetlifyAdapter(),
};
