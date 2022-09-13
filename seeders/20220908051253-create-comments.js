'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Comments',
      [
        {
          user_Id: 1,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_Id: 2,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_Id: 3,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_Id: 4,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_Id: 5,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_Id: 6,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_Id: 7,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_Id: 8,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_Id: 9,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_Id: 10,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_Id: 11,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_Id: 12,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_Id: 13,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_Id: 14,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_Id: 15,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_Id: 16,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_Id: 17,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_Id: 18,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_Id: 19,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_Id: 20,
          body: 'Esto es un texto demasiado largo',
          new_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_Id: 21,
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
