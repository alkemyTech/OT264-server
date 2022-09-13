'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Comments',
      [
        {
          user_id: 1,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 2,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 3,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 4,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 5,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 6,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 7,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 8,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 9,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 10,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 11,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 12,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 13,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 14,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 15,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 16,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 17,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 18,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 19,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 20,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 21,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {}
};
