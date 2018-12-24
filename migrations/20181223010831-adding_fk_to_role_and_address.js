'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    const promises = [
      queryInterface
        .addColumn('address', 'id_user', {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: 'users',
            key: 'id'
          }
        })
        .then(() => console.log('adding id_user to address table'))
        .catch(e => console.log('some error ocurred when adding id_user', e)),
      queryInterface
        .addColumn('roles', 'id_user', {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: 'users',
            key: 'id'
          }
        })
        .then(() => console.log('adding id_user to roles table'))
        .catch(e => console.log('some error ocurred when adding id_user', e))
    ];

    return Promise.all(promises);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    const promises = [
      queryInterface
        .removeConstraint('roles', 'roles_id_user_fk')
        .then(() => console.log('roles fk key constraint removed'))
        .catch(e => console.log('error on removing roles fk constraint', e)),
      queryInterface
        .removeConstraint('address', 'address_id_user_fk')
        .then(() => console.log('address fk constraint removed'))
        .catch(e => console.log('error removing address fk constraint')),
      queryInterface
        .removeColumn('roles', 'id_user')
        .then(() => console.log('success on removing id_user column'))
        .catch(e => console.log('error on removing id_user column', e)),
      queryInterface
        .removeColumn('address', 'id_user')
        .then(() => console.log('success on removing id_user column'))
        .catch(e => console.log('error on removing id_user column', e))
    ];
    return Promise.all(promises);
  }
};
