'use strict';

const version = require('./src/version');
const help = require('./src/help');
const generate = require('./src/generate');

const AVAILABLE_COMMANDS = ['--version', '--help', '--generate'];
const command = process.argv[2];

if (!command || !AVAILABLE_COMMANDS.includes(command)) {
  return help.getHelpInfo();
}

switch (command) {
  case '--version': {
    version.getPackageVersion();
    break;
  }
  case '--help': {
    help.getHelpInfo();
    break;
  }
  case '--generate': {
    const count = Number(process.argv[3]) || 1;
    generate.createMocks(count);
    break;
  }
}
