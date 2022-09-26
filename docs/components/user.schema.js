module.exports = {
  User: {
    type: 'object',
    properties: {
      firstName: {
        type: 'string',
        example: 'RodrigoFuentes'
      },
      lastName: {
        type: 'string',
        example: 'Fuentes'
      },
      email: {
        type: 'string',
        example: 'rodrigofuentes@mail.com'
      },
      password: {
        type: 'string',
        example: 'qwerty'
      },
      image: {
        type: 'string',
        example: 'https://http.cat/100'
      }
    }
  }
};
