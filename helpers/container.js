class Container {
  constructor() {
    this.registry = {};
  }
  register(name, dependency) {
    this.registry[name] = dependency;
  }
  resolve(name) {
    return this.registry[name];
  }
  getKeysAndValues() {
    return this.registry;
  }
  getOnlyKeys() {
    return Object.keys(this.registry);
  }
}

module.exports = Container;
