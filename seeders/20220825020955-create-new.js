'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'News',
      [
        {
          name: 'Vuelta al cole',
          content: 'campaña para juntar utiles escolares',
          image: 'https://drive.google.com/drive/u/0/folders/1uQtPNC9-fDrioNhcsoIEZofq3ixBmxfJ',
          categoriesId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('News', null, {});
  }
};
