const apiresponse = require('./apiresponse.schema');
const error = require('./error.schema');
const user = require('./user.schema');
const address = require('./address.schema');

module.exports = {
  components: {
    schemas: {
      ...user,
      ...address,
      ...apiresponse
    },
    responses: {
      ...error
    },
    securitySchemes: {
      //scemas de seguridad bearer token para proteger las rutas
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    }
  }
};
