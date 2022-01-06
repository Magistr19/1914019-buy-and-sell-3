'use strict';

const chalk = require(`chalk`);
const packageJSON = require(`../../../package.json`);

module.exports = {
  name: `--version`,
  run: () => console.info(chalk.blue(packageJSON.version)),
};
