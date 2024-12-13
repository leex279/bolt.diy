// remix.config.js
module.exports = {
  // Specify the paths to your app's directories if they differ from the defaults
  appDirectory: "app",
  assetsBuildDirectory: "build/client/assets",
  publicPath: "/assets/",
  
  // Use the Netlify adapter
  serverBuildPath: "build/server/index.js",
  future: {
    v2_meta: true,
  },
  
  // Add the Netlify adapter
  adapter: require("@remix-run/netlify"),
};
