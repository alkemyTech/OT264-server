module.exports = {
  NotFound: {
    description: 'Recurso no encontrado',
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/ApiResponse'
        }
      }
    }
  },
  Unauthorized: {
    description: 'Unauthorized',
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/ApiResponse'
        }
      }
    }
  }
};
