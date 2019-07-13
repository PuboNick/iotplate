const Controller =  _.use('modules/Web/Controller');
const User = _.use('app/Model/User');

module.exports = class extends Controller {
  constructor(req, res) {
    super();
    const user = new User();
    user.find(req.query.id).then(data => res.send(data));
  }
}