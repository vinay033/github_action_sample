const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  //.
  Plugins: [
    new ModuleFederationPlugin({
      name: "subapp1",
      library: { type: "var", name: "subapp1" },
      filename: "remoteEntry.js",
      exposes: {
        "./store": "./src/app/store",
      },
    }),
  ],
};
