module.exports = {
  New: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        example: 'Nuevo taller de pintura'
      },
      content: {
        type: 'string',
        example: 'Taller de pinturas sobre arcilla'
      },
      image: {
        type: 'string',
        example: 'https://http.cat/100'
      },
      categoriesId: {
        type: 'integer',
        format: 'int64',
        example: 2
      },
      comment: {
        type: 'string',
        example: 'Que buen taller'
      }
    }
  }
};
