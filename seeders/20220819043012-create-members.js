'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Members', [
      {
        name: 'Marita Gomez',
        facebookUrl: 'Marita_Gomez',
        instagramUrl: 'MaritaGomez',
        linkedinUrl: 'Marita-Gomez',
        image: 'https://drive.google.com/drive/u/0/folders/1OVhs9sXHQ1jgfOWHztOTSSmpq4QKCH4q',
        description: 'Fundadora Marita estudió la carrera de nutrición y se especializó en nutrición infantil',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: 'Rodrigo Fuentes',
        facebookUrl: 'Rodrigo Fuentes',
        instagramUrl: 'RodrigoFuentes',
        linkedinUrl: 'Rodrigo-Fuentes',
        image: 'https://drive.google.com/drive/u/0/folders/1OVhs9sXHQ1jgfOWHztOTSSmpq4QKCH4q',
        description: 'Contador',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
