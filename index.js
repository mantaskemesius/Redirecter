const http = require("http");
const httpProxy = require("http-proxy");
const opn = require('opn');
const ip = require("ip");
const target = "http://localhost:3000";

const proxy = httpProxy.createProxyServer({});
const PORT = 5050;

proxy.on("proxyReq", function(proxyReq, req, res, options) {});

http
  .createServer(function(req, res) {
    proxy.web(req, res, {
      target,
      changeOrigin: true
    });
  })
  .listen(5050, () => {
    const url = `http://${ip.address()}:${PORT}`;
    console.log("URL:", url);
    opn(url);
  });
