'use strict';

module.exports = {
  ExitCode: {
    success: 0,
    error: 1,
  },
  HttpCode: {
    OK: 200,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
    FORBIDDEN: 403,
    UNAUTHORIZED: 401,
  },
  DEFAULT_COMMAND: `--help`,
  USER_ARGV_INDEX: 2,
};
