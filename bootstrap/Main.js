const HttpServer = _.use('bootstrap/Modules/HttpServer');
const App = _.use('plugins/App');
const routes = _.use('router/api');
const axios = _.use('plugins/Axios');
const http = new HttpServer();
routes.forEach(item => {
  let controller = _.use(`app/Controllers/${item.controller}`);
  http.route(item.path, item.method, (req, res) => { new controller(req, res) });
});
http.start(8099);
App.prototype.io = http.io;
App.prototype.axios = axios;