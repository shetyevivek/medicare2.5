module.exports = {
  resolve: {
      alias: {
      path: require.resolve("path-browserify"),
      http: false,
      https: false,
      stream: false,
      crypto: false,
      zlib: false,
      net: false,
      tls: false,

      }
  }
};