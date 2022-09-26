module.exports = {
  User: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
        format: 'int64',
        example: 10
      },
      firstName: {
        type: 'string',
        example: 'No'
      },
      lastName: {
        type: 'string',
        example: 'Admin'
      },
      email: {
        type: 'string',
        example: 'noAdmin_11@test.com'
      },
      password: {
        type: 'string',
        example: 'noAdmin_11'
      },
      image: {
        type: 'string',
        example: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png'
      }
      /* address: {
        type: 'array',
        items: {
          $ref: '#components/schemas/Address'
        }
      } */
    }
  }
};
