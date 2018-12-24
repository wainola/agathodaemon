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
      .createTable('roles', {
        id: {
          type: Sequelize.UUID,
          allowNull: false,
          primaryKey: true
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        created: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW
        },
        updated: {
          type: Sequelize.DATE,
          defaultValue: null
        }
      })
      .then(() => console.log('Creating ROLE table'))
      .catch(e =>
        console.log('Some error ocurred when creating ROLE table', e)
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
      .dropTable('role')
      .then(() => console.log('Success on dropping ROLE table'))
      .catch(e => console.log('Some error ocurrend when dropping ROLE table'));
  }
};
