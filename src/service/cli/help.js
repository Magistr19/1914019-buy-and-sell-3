'use strict';

const chalk = require(`chalk`);

module.exports = {
  name: `--help`,
  run: () => console.info(chalk.gray(`Доступные комманды: --help, --version, --generate <count>`)),
};
