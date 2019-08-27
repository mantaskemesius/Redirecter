const http = require("http");
const httpProxy = require("http-proxy");

const target = "localhost:3000";

const proxy = httpProxy.createProxyServer({});

proxy.on("proxyReq", function(proxyReq, req, res, options) {});

http
  .createServer(function(req, res) {
    console.log('Request host:', req.headers.host);
    console.log('Request UserAgent:', req.headers['user-agent']);
    console.log('------------------');
    proxy.web(req, res, {
      target,
      changeOrigin: true
    });
  })
  .listen(5050, () => {
    console.log("Waiting for requests...");
  });
