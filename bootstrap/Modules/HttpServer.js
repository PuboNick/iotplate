module.exports = class HttpServer {
  constructor() {
    const express = require('express');
    const http = require('http');
    const bodyParser = require('body-parser');
    const socketIo = require('socket.io');
    this.app = express();
    this.server = http.createServer(this.app);
    this.io = socketIo(this.server);
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(express.static('dist', { extensions: ['html', 'htm'] }));
  }
  middleware(fn) {
    this.app.use('*', fn);
  }
  route(path, method, controller) {
    this.app[method](path, controller);
  }
  start(port = 80) {
    this.server.listen(port, () => console.log(`WEB服务开启成功！PORT：${this.server.address().port}`));
  }
}