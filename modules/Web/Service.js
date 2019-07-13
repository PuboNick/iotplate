const { Request, Response } = _.use('modules/Web/Http');
const Route = _.use('modules/Web/Route');
const url = require('url');

module.exports = class Service {
  constructor(req, res) {
    this.request = new Request(req);
    this.response = new Response(res);
    const route = Route.routes.filter(item => item.path === this.request.url )[0];
    route ? this.checkRedirect(route) : this.response.sendError(404);
  }
  checkRedirect(route) {
    route.method === 'redirect' ? this.response.redirect(route.target) : this.toController(route);
  }
  toController(route) {
    const controller = _.use('app/Controller/' + route.controller);
    typeof controller === 'function' && new controller(this.request, this.response);
  }
}