'use strict';

const packageJSON = require('../../../package.json');

module.exports = {
  getPackageVersion: () => console.log(packageJSON.version),
};
