module.exports = {
  Testimonial: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        example: 'Concurso de pintara'
      },
      image: {
        type: 'string',
        example: 'https://placeimg.com/640/480/tech?t=1660971019113'
      },
      content: {
        type: 'string',
        example: 'Ingresé a un concurso de pintura gracias a taller'
      }
    }
  }
};
