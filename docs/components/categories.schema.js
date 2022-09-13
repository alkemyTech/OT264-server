module.exports = {
  Categories: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
        format: 'int64',
        example: 10
      },
      name: {
        type: 'string',
        example: 'Categoria 1'
      },
      description: {
        type: 'string',
        example: 'Descripcion de categoria 1'
      },
      image: {
        type: 'string',
        example: 'https://placeimg.com/640/480/tech?t=1660971019113'
      }
    }
  }
};
