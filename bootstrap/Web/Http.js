const Service = _.use('modules/Web/Service');

module.exports = class HttpModule{
  static server = new HttpModule();
  static start() {
    this.server.listen(_.env.web.port || 80, () => { console.log(`HTTP 服务开启成功,端口: ${this.server.address().port}`) });
  };
  constructor() {
    const http = require('http');
    const server = http.createServer((req, res) => { new Service(req, res); });
    return server;
  }
}