const Container = require('../../helpers/container');

let container;

describe('Container', () => {
  beforeAll(() => {
    container = new Container();
  });
  it('shoudl test that container returns an empty object after instantiation', () => {
    expect(container).toBeTruthy();
  });
  it('should return the object that is saved it to the registry', () => {
    const customObject = customPropertie => {
      this.customPropertie = customPropertie;
      return {
        someMethod: function() {
          return this.customPropertie;
        }
      };
    };

    container.register('customObject', customObject);
    const keys = container.getOnlyKeys();
    expect(keys).toEqual(['customObject']);
  });
});
