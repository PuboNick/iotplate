module.exports = class Route {
  static routes = [];
  static get(path, controller, name = '') {
    this.routes.push({ path, controller, method: 'get', name  });
  }
  static post(path, controller, name = '') {
    this.routes.push({ path, controller, method: 'post', name  });
  }
  static redirect(path, target) {
    this.routes.push({ path, controller: null, method: 'redirect', target  });
  }
};