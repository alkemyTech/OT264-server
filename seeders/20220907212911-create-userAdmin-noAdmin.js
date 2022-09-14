'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const salt = bcrypt.genSaltSync();
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'User',
          lastName: 'Admin_1',
          email: 'isAdmin_1@test.com',
          password: bcrypt.hashSync('userAdmin_1', salt),
          roleId: 1,
          image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'User',
          lastName: 'Admin_2',
          email: 'isAdmin_2@test.com',
          password: bcrypt.hashSync('userAdmin_2', salt),
          roleId: 1,
          image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'User',
          lastName: 'Admin_3',
          email: 'isAdmin_3@test.com',
          password: bcrypt.hashSync('userAdmin_3', salt),
          roleId: 1,
          image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'User',
          lastName: 'Admin_4',
          email: 'isAdmin_4@test.com',
          password: bcrypt.hashSync('userAdmin_4', salt),
          roleId: 1,
          image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'User',
          lastName: 'Admin_5',
          email: 'isAdmin_5@test.com',
          password: bcrypt.hashSync('userAdmin_5', salt),
          roleId: 1,
          image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'User',
          lastName: 'Admin_6',
          email: 'isAdmin_6@test.com',
          password: bcrypt.hashSync('userAdmin_6', salt),
          roleId: 1,
          image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'User',
          lastName: 'Admin_7',
          email: 'isAdmin_7@test.com',
          password: bcrypt.hashSync('userAdmin_7', salt),
          roleId: 1,
          image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'User',
          lastName: 'Admin_8',
          email: 'isAdmin_8@test.com',
          password: bcrypt.hashSync('userAdmin_8', salt),
          roleId: 1,
          image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'User',
          lastName: 'Admin_9',
          email: 'isAdmin_9@test.com',
          password: bcrypt.hashSync('userAdmin_9', salt),
          roleId: 1,
          image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'User',
          lastName: 'Admin_10',
          email: 'isAdmin_10@test.com',
          password: bcrypt.hashSync('userAdmin_10', salt),
          roleId: 1,
          image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'No',
          lastName: 'Admin_1',
          email: 'noAdmin_1@test.com',
          password: bcrypt.hashSync('noAdmin_1', salt),
          roleId: 2,
          image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'No',
          lastName: 'Admin_2',
          email: 'noAdmin_2@test.com',
          password: bcrypt.hashSync('noAdmin_2', salt),
          roleId: 2,
          image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'No',
          lastName: 'Admin_3',
          email: 'noAdmin_3@test.com',
          password: bcrypt.hashSync('noAdmin_3', salt),
          roleId: 2,
          image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'No',
          lastName: 'Admin_4',
          email: 'noAdmin_4@test.com',
          password: bcrypt.hashSync('noAdmin_4', salt),
          roleId: 2,
          image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'No',
          lastName: 'Admin_5',
          email: 'noAdmin_5@test.com',
          password: bcrypt.hashSync('noAdmin_5', salt),
          roleId: 2,
          image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'No',
          lastName: 'Admin_6',
          email: 'noAdmin_6@test.com',
          password: bcrypt.hashSync('noAdmin_6', salt),
          roleId: 2,
          image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'No',
          lastName: 'Admin_7',
          email: 'noAdmin_7@test.com',
          password: bcrypt.hashSync('noAdmin_7', salt),
          roleId: 2,
          image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'No',
          lastName: 'Admin_8',
          email: 'noAdmin_8@test.com',
          password: bcrypt.hashSync('noAdmin_8', salt),
          roleId: 2,
          image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'No',
          lastName: 'Admin_9',
          email: 'noAdmin_9@test.com',
          password: bcrypt.hashSync('noAdmin_9', salt),
          roleId: 2,
          image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'No',
          lastName: 'Admin_10',
          email: 'noAdmin_10@test.com',
          password: bcrypt.hashSync('noAdmin_10', salt),
          roleId: 2,
          image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
