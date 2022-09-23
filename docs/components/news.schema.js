module.exports = {
  New: {
    type: 'object',
    properties: {
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
        example: 2
      },
      comment: {
        type: 'string',
        example: 'Comentario por Id'
      }
    }
  }
};
