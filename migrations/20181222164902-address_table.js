'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface
      .createTable('address', {
        id: {
          type: Sequelize.UUID,
          allowNull: false,
          primaryKey: true
        },
        street: {
          type: Sequelize.STRING,
          allowNull: false
        },
        number: {
          type: Sequelize.STRING,
          allowNull: false
        },
        commune: {
          type: Sequelize.STRING,
          allowNull: false
        },
        region: {
          type: Sequelize.STRING
        },
        telephone: {
          type: Sequelize.STRING
        }
      })
      .then(() => console.log('Success on creating ADDRESS table'))
      .catch(e =>
        console.log('Some error ocurred when creating ADDRESS table', e)
      );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface
      .dropTable('address')
      .then(() => console.log('Success on dropping ADDRESS table'))
      .catch(e =>
        console.log('Some error ocurred when dropping ADDRESS table', e)
      );
  }
};
