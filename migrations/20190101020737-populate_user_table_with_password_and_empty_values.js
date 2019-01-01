'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   const query = 'select * from temp_users';
   const insertionQuery = `INSERT INTO users (id, name, lastname, email, password, created) VALUES (?,?,?,?,?,?) RETURNING *`;
   const queryExec = await Sequelize.query(query);
   const results = await queryExec[0];
   return Promise.all(results.map(item => {
     Sequelize.query(insertionQuery, { replacements : [item.id, item.name, item.lastname, item.email, null, item.created]}).then(() => console.log('success on insertion of item', ...item)).catch(e => console.log('some error happened on insertion of item', ...item))
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
     queryInterface.
   ]
  }
};
