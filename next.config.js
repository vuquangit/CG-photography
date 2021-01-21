module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif|eot|ttf|woff|woff2)$/,
      loader: require.resolve("url-loader")
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
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
