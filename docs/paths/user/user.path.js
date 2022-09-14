// Ejemplo de un path con valores en query
const base = {
  get: {
    tags: ['User'],
    description: 'Listar usuarios',
    operationId: 'getUsers', //debe ser unico en toda la documentación
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
    tags: ['User'],
    description: 'crear Usuario',
    operationId: 'postUser',
    parameters: [],
    security: [{ bearerAuth: [] }],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/User'
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
  get: {
    tags: ['User'],
    description: 'Detalles de usuario',
    operationId: 'getUser',
    parameters: [
      {
        in: 'path',
        name: 'userId',
        schema: {
          type: 'integer'
        },
        required: true,
        description: 'Id del usuario'
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

  put: {
    tags: ['User'],
    description: 'Editar usuario',
    operationId: 'putUSer',
    parameters: [
      {
        in: 'path',
        name: 'userId',
        schema: {
          type: 'integer'
        },
        required: true,
        description: 'Id del usuario'
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

  delete: {
    tags: ['User'],
    description: 'Eliminar usuario',
    operationId: 'delUSer',
    parameters: [
      {
        in: 'path',
        name: 'userId',
        schema: {
          type: 'integer'
        },
        required: true,
        description: 'Id del usuario'
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
  }
};

module.exports = {
  base,
  byId
};
