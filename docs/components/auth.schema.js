module.exports = {
  RegisterUser: {
    type: 'object',
    properties: {
      firstName: {
        type: 'string',
        example: 'Cesilia'
      },
      lastName: {
        type: 'string',
        example: 'S.'
      },
      email: {
        type: 'string',
        example: 'maritagomez@gmail.com'
      },
      password: {
        type: 'string',
        example: 'ceciliaPassword'
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
