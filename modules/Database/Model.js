module.exports  = class {
  table = '';
  values = [];
  find(id) {
    let res = 'SELECT ';
    if(Array.isArray(this.values) && this.values.length) {
      this.values.forEach(item => res += `${item},`);
      res = res.slice(0, res.length - 1);
    } else {
      res += '*';
    }
    return this.dosql(res += ` FROM ${this.table} WHERE id=${id}`);
  }
  async dosql(sql) {
    return new Promise((resolve, reject) => { this.demo(sql, resolve, reject) });
  }
  demo(sql, resolve, reject) {
    resolve(sql);
  }
}