module.exports = {
  ContactUser: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        example: 'Marita'
      },
      phone: {
        type: 'integer',
        example: '2614323456'
      },
      email: {
        type: 'string',
        example: 'maritagomez@mail.test'
      },
      message: {
        type: 'text',
        example: 'Mensaje aqui'
      }
    }
  }
};
