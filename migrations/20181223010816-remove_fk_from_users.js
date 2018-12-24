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
        .removeConstraint('users', 'users_id_address_fkey')
        .then(() => console.log('address fk key constraint removed'))
        .catch(e => console.log('error on removing address fk constraint', e)),
      queryInterface
        .removeConstraint('users', 'users_id_role_fkey')
        .then(() => console.log('role fk constraint removed'))
        .catch(e => console.log('error removing role fk constraint')),
      queryInterface
        .removeColumn('users', 'id_address')
        .then(() => console.log('success on removing id_address column'))
        .catch(e => console.log('error on removing id_address column', e)),
      queryInterface
        .removeColumn('users', 'id_role')
        .then(() => console.log('success on removing id_role column'))
        .catch(e => console.log('error on removing id_role column', e))
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
        .addColumn('users', 'id_address', {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: 'address',
            key: 'id'
          }
        })
        .then(() => console.log('adding id_addres column'))
        .catch(e =>
          console.log('some error ocurred when adding id_addres column', e)
        ),
      queryInterface
        .addColumn('users', 'id_role', {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: 'roles',
            key: 'id'
          }
        })
        .then(() => console.log('adding id_role column'))
        .catch(e =>
          console.log('some error ocurred when adding id_role column', e)
        )
    ];
    return Promise.all(promises);
  }
};
