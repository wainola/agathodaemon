const UserHandler = require('../../handlers/User');
const register = require('../../handlers/__mocks__/User');

jest.mock('../../handlers/User.js');

const mockRegister = jest.fn().mockImplementation(body => register);

describe('Register => UserHandler', () => {
  it('should return an user registered with a token', () => {
    const body = {
      user: {
        name: 'John',
        lastname: 'Doe',
        email: 'john@email.com'
      }
    };
    const response = mockRegister().register(body);
    const keys = Object.keys(response);
    expect(keys).toHaveLength(6);
  });
});

describe('Login => UserHandler', () => {});
