module.exports = {
  Testimonial: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
        format: 'int64',
        example: 10
      },
      name: {
        type: 'string',
        example: 'Alan'
      },
      image: {
        type: 'string',
        example: 'https://placeimg.com/640/480/tech?t=1660971019113'
      },
      content: {
        type: 'string',
        example: 'Content 1'
      }
    }
  }
};
