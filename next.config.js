module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif|eot|ttf|woff|woff2)$/,
      loader: require.resolve("url-loader")
    });

    return config;
  },
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
    };
  },
}
