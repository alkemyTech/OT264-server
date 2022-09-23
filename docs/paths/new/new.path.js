const base = {
  post: {
    summary: 'Create new',
    tags: ['News'],
    description: 'Crear New',
    operationId: 'postNew',
    parameters: [],
    security: [{ bearerAuth: [] }],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/New'
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
  },
  get: {
    summary: 'Get all news',
    tags: ['News'],
    description: 'Listar Novedades',
    operationId: 'getNews',
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
  }
};

const byId = {
  get: {
    summary: 'Get id new',
    tags: ['News'],
    description: 'Detalles de novedades',
    operationId: 'getNew',
    parameters: [
      {
        in: 'path',
        name: 'newId',
        schema: {
          type: 'integer'
        },
        required: true,
        description: 'Id de la novedad'
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

  put: {
    summary: 'Update new',
    tags: ['News'],
    description: 'Editar novedaad',
    operationId: 'putNew',
    parameters: [
      {
        in: 'path',
        name: 'newId',
        schema: {
          type: 'integer'
        },
        required: true,
        description: 'Id de la novedad'
      }
    ],
    security: [{ bearerAuth: [] }],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/New'
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
  },

  delete: {
    summary: 'Delete new',
    tags: ['News'],
    description: 'Eliminar novedaad',
    operationId: 'delNew',
    parameters: [
      {
        in: 'path',
        name: 'newId',
        schema: {
          type: 'integer'
        },
        required: true,
        description: 'Id de la novedaad'
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
const idComments = {
  get: {
    tags: ['News'],
    description: 'Comentarios por Id',
    operationId: 'getComment',
    parameters: [
      {
        in: 'path',
        name: 'id',
        schema: {
          type: 'integer'
        },
        required: true,
        description: 'todos loos comentarios de la novedad'
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
  byId,
  idComments
};
