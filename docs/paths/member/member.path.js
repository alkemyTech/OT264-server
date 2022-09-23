const base = {
  post: {
    summary: 'Create member',
    tags: ['Members'],
    description: 'Crear member',
    operationId: 'postMember',
    parameters: [],
    security: [{ bearerAuth: [] }],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Member'
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
    summary: 'Get all members',
    tags: ['Members'],
    description: 'List Member',
    operationId: 'getMembers',
    parameters: [
      {
        in: 'query',
        name: 'limit'
      },
      {
        in: 'query',
        name: 'page'
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
  put: {
    summary: 'Update member',
    tags: ['Members'],
    description: 'Edit member',
    operationId: 'putMember',
    parameters: [
      {
        in: 'path',
        name: 'memberId',
        schema: {
          type: 'integer'
        },
        required: true,
        description: 'Id member'
      }
    ],
    security: [{ bearerAuth: [] }],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Member'
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
    summary: 'Delete member',
    tags: ['Members'],
    description: 'Eliminar member',
    operationId: 'delMember',
    parameters: [
      {
        in: 'path',
        name: 'memberId',
        schema: {
          type: 'integer'
        },
        required: true,
        description: 'Id member'
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
