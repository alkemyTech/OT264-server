'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Contacts',
      [
        {
          name: 'Contacto 1',
          phone: 45612315,
          email: 'contacto@test.com',
          message: 'Esto es un mensaje de prueba',
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Contacts', null, {});
  }
};
