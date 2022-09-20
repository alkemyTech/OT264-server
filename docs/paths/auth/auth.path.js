const register = {
  post: {
    tags: ['Auth'],
    description: 'Registrar usuario',
    operationId: 'registerUser',
    parameters: [],
    security: [],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/RegisterUser'
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

const login = {
  post: {
    tags: ['Auth'],
    description: 'Login',
    operationId: 'registerUser',
    parameters: [],
    security: [],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Login'
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

const me = {
  get: {
    tags: ['Auth'],
    description: 'Verificar usuario autenticado',
    operationId: 'checkAuth',
    parameters: [],
    security: [{ bearerAuth: [] }],
    responses: {
      200: {
        description: 'OK',
        content: {
          'aplication/json': {
            schema: {
              $ref: '#/components/schemas/User'
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
  login,
  register,
  me
};
