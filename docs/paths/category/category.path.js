const base = {
  get: {
    tags: ['Categories'],
    description: 'Listar categorias',
    operationId: 'getCategories',
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
  // Request de tipo post y protección con bearear
  post: {
    tags: ['Categories'],
    description: 'Crear Categoria',
    operationId: 'postCategory',
    parameters: [],
    security: [{ bearerAuth: [] }],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Categories'
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
    tags: ['Categories'],
    description: 'Detalles de categoria',
    operationId: 'getCategory',
    parameters: [
      {
        in: 'path',
        name: 'categoriesId',
        schema: {
          type: 'integer'
        },
        required: true,
        description: 'Id de la categoria'
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
    tags: ['Category'],
    description: 'Editar categoria',
    operationId: 'putCategory',
    parameters: [
      {
        in: 'path',
        name: 'categoryId',
        schema: {
          type: 'integer'
        },
        required: true,
        description: 'Id de la categoria'
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
    tags: ['Category'],
    description: 'Eliminar categoria',
    operationId: 'delCategory',
    parameters: [
      {
        in: 'path',
        name: 'categoryId',
        schema: {
          type: 'integer'
        },
        required: true,
        description: 'Id de la categoria'
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
