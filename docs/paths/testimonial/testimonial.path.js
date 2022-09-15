const base = {
  get: {
    tags: ['Testimonials'],
    description: 'Listar testimonios',
    operationId: 'getTestimonials',
    parameters: [
      {
        in: 'query',
        name: 'limit'
      },
      {
        in: 'query',
        name: 'offset'
      }
    ],
    responses: {
      200: {
        description: 'OK',
        content: {
          'aplication/json': {
            schema: {
              $ref: '#/components/schemas/ApiResponse'
            }
          }
        }
      },
      400: {
        $ref: '#components/responses/NotFound'
      },
      401: {
        $ref: '#components/responses/Unauthorized'
      }
    }
  },
  // Request de tipo post y protección con bearear
  post: {
    tags: ['Testimonials'],
    description: 'Crear Testimonio',
    operationId: 'postTestimonial',
    parameters: [],
    security: [{ bearerAuth: [] }],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Testimonial'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'aplication/json': {
            schema: {
              $ref: '#/components/schemas/ApiResponse'
            }
          }
        }
      },
      400: {
        $ref: '#components/responses/NotFound'
      },
      401: {
        $ref: '#components/responses/Unauthorized'
      }
    }
  }
};

const byId = {
  put: {
    tags: ['Testimonials'],
    description: 'Editar testimonio',
    operationId: 'putTestimonial',
    parameters: [
      {
        in: 'path',
        name: 'testimonialId',
        schema: {
          type: 'integer'
        },
        required: true,
        description: 'Id del testimonio'
      }
    ],
    security: [{ bearerAuth: [] }],
    responses: {
      200: {
        description: 'OK',
        content: {
          'aplication/json': {
            schema: {
              $ref: '#/components/schemas/ApiResponse'
            }
          }
        }
      },
      400: {
        $ref: '#components/responses/NotFound'
      },
      401: {
        $ref: '#components/responses/Unauthorized'
      }
    }
  },

  delete: {
    tags: ['Testimonials'],
    description: 'Eliminar testimonio',
    operationId: 'delTestimonial',
    parameters: [
      {
        in: 'path',
        name: 'testimonialId',
        schema: {
          type: 'integer'
        },
        required: true,
        description: 'Id del testimonio'
      }
    ],
    security: [{ bearerAuth: [] }],
    responses: {
      200: {
        description: 'OK',
        content: {
          'aplication/json': {
            schema: {
              $ref: '#/components/schemas/ApiResponse'
            }
          }
        }
      },
      400: {
        $ref: '#components/responses/NotFound'
      },
      401: {
        $ref: '#components/responses/Unauthorized'
      }
    }
  }
};

module.exports = {
  base,
  byId
};
