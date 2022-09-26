const contact = {
  get: {
    tags: ['Contacts'],
    description: 'Verificar usuario autenticado',
    operationId: 'getContact',
    parameters: [],
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
  contact
};
