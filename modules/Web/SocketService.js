module.exports = class {
  static io = null;
  constructor(socket) {
    socket.on('join', room => socket.join(room));
  }
}