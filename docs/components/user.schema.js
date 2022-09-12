module.exports = {
  User: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
        format: 'int64',
        example: 10
      },
      username: {
        type: 'string',
        example: 'theUser'
      },
      email: {
        type: 'string',
        example: 'user@mail.com'
      },
      password: {
        type: 'string',
        example: '123456'
      },
      address: {
        type: 'array',
        items: {
          $ref: '#components/schemas/Address'
        }
      }
    }
  }
};
