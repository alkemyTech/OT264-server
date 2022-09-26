module.exports = {
  RegisterUser: {
    type: 'object',
    properties: {
      firstName: {
        type: 'string',
        example: 'Marita'
      },
      lastName: {
        type: 'string',
        example: 'Gomez'
      },
      email: {
        type: 'string',
        example: 'maritagomez@mail.test'
      },
      password: {
        type: 'string',
        example: '123456'
      }
    }
  },
  Login: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
        example: 'isAdmin_4@test.com'
      },
      password: {
        type: 'string',
        example: 'userAdmin_4'
      }
    }
  }
};
