const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/textrazor",
    createProxyMiddleware({
      target: "http://localhost:5000", // Forward to backend
      changeOrigin: true,
    })
  );

  app.use(
    "/keywords",
    createProxyMiddleware({
      target: "http://localhost:5000", // Forward to backend
      changeOrigin: true,
    })
  );
};
