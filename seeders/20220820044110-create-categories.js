'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: 'Categoria 1',
          description: ' Descripcion de categoria 1 ',
          image: 'https://placeimg.com/640/480/tech?t=1660971019113',
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
