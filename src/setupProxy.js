const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://mc-finance-583b0b4de339.herokuapp.com",
      changeOrigin: true,
      secure: false,
      // ❌ без pathRewrite, не убирай /api
    })
  );
};
