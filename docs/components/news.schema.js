module.exports = {
  New: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
        format: 'int64',
        example: 10
      },
      name: {
        type: 'string',
        example: 'New 1'
      },
      content: {
        type: 'string',
        example: 'Descripcion de New 1'
      },
      image: {
        type: 'string',
        example: 'https://http.cat/100'
      },
      categoriesId: {
        type: 'integer',
        format: 'int64',
        example: 10
      },
      comment: {
        type: 'string',
        example: 'Comentario por Id'
      }
    }
  }
};
