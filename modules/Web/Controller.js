module.exports = class {
  constructor() {
    
  }
  install(obj) {
    for(const key in obj) {
      this[key] = obj[key];
    }
  }
  use(index, value) {
    this[index] = value;
  }
}