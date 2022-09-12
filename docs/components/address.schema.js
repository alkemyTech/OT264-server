module.exports = {
  Address: {
    type: 'object',
    properties: {
      street: {
        type: 'string',
        example: '437 Americas'
      },
      city: {
        type: 'string',
        example: 'Bogotá'
      },
      state: {
        type: 'string',
        example: 'Cundinamarca'
      },
      zip: {
        type: 'string',
        example: '94301'
      }
    }
  }
};
