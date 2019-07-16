const Controller =  _.use('modules/Web/Controller');
const User = _.use('app/Model/User');

module.exports = class extends Controller {
  constructor(req, res) {
    super();
    const user = new User();
    const id = req.query.id || 0;
    res.setHeader('Content-Type', 'text/html');
    user.find(id).then(data => res.view(`<h2 style="color: #cd2626;">${data}</h2>`));
  }
}