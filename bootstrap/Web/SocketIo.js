const HttpModule = _.use('bootstrap/Web/Http');
const socketIo = require('socket.io');
const SocketService = _.use('modules/Web/SocketService');

module.exports = class {
  static io = socketIo(HttpModule.server);
  static start() {
    SocketService.io = this.io;
    this.io.on('connect', socket => { new SocketService(socket) });
    this.io.on('error', () => {});
  }
}