module.exports = class {
  dosql(sql, option) {
    return new Promise((resolve, reject) => { this.select(sql, option, resolve, reject) });
  }
  select(sql, option, resolve, reject) {
    const mysql = require('mysql');
    const connection = mysql.connection(option, err => err && reject(err));
    connection.query(sql, (err, results) => err ? reject(err) : resolve(results));
    connection.end(err => err && reject(err));
  }
}