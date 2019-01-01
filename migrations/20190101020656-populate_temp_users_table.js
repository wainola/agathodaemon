'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    const query = 'select * from users'
    const insertionQuery = `INSERT INTO temp_users (id, name, lastname, email created ) VALUES (?,?,?,?,?) RETURNING *`;
    const queryExec = await Sequelize.query(query);
    const results = await queryExec[0];
    return Promise.all(results.map(item => {
      Sequelize.query(insertionQuery, { replacements: [ item.id, item.name, item.lastname, item.created ]}).then(r => console.log('DATA INSERTED ON TEMP_USERS WAS', d)).catch(e => console.log('Some error happened when inserting data to temp_users table', e));
    }))
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   const promises = [
     queryInterface.dropTable('temp_users').then(() => console.log('Success on removing temp_users table')).catch(e => console.log('Some error happened when deleting temp_users table', e)),
     queryInterface.createTable('temp_users', {
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
    }).then(() => console.log('Success on creating temp_users table')).catch(e => console.log('some error ocurred when creating temp_users table', e))
   ]
   return Promise.all(promises)
  }
};
