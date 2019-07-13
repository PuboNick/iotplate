const Model = _.use('modules/Database/Model');

module.exports = class extends Model {
  table = 'users';
  values = [ 'username', 'password', 'nickname' ];
  constructor() {
    super();
  }
}