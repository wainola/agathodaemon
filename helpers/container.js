class Container {
  constructor() {
    this.registry = {};
  }
  register(name, dependency) {
    this.registry[name] = dependecy;
  }
  resolve(name) {
    return new this.registry[name]();
  }
}

module.exports = Container;
