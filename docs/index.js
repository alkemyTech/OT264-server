const basicInfo = require('./basicInfo');
const server = require('./server');
const tags = require('./tags');
const components = require('./components');
const paths = require('./paths');

module.exports = {
  ...basicInfo,
  ...server,
  ...tags,
  ...components,
  ...paths
};
