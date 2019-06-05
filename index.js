global._ = {};
_.use = path => require(`./${path}`);
_.env = _.use('config');
_.use('bootstrap/Main');