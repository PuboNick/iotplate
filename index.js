global._ = {};
_.use = path => require('./' + path);
_.env = _.use('app.config');
_.use('bootstrap/App');