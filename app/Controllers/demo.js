const App = _.use('plugins/App');
module.exports = class extends App {
  constructor(req, res) {
    super();
    res.send('ok');
  }
}