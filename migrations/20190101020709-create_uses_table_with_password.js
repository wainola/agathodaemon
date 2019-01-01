'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.createTable('temp_users', {
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
    password: {
      type: Sequelize.STRING,
      allowNull: true
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
  }).then(() => console.log('Success on creating users table')).catch(e => console.log('some error ocurred when creating users table', e))
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.dropTable('users').then(() => console.log('Success on deleting users table')).catch(e => console.log('Some error happened when deleting users table'))
  }
};
