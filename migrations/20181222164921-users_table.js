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
      .createTable('users', {
        id: {
          type: Sequelize.UUID,
          allowNull: false,
          primaryKey: true
        },
        id_role: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: 'roles',
            key: 'id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
        },
        id_address: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: 'address',
            key: 'id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        lastname: {
          type: Sequelize.STRING,
          allowNull: false
        },
        email: {
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
        },
        deleted: {
          type: Sequelize.DATE,
          defaultValue: null
        }
      })
      .then(() => console.log('Success on creating USERS table'))
      .catch(e =>
        console.log('Some error ocurred when creating USERS table', e)
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
      .dropTable('users')
      .then(() => console.log('Success on removing USERS table'))
      .catch(e =>
        console.log('Some error ocurred when dropoing USERS table', e)
      );
  }
};
