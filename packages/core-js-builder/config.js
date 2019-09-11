"use strict";
const { version } = require("./package");

module.exports = {
  /* eslint-disable prefer-template */
  banner:
    "/**\n" +
    " * core-js " +
    version +
    "\n" +
    " * https://github.com/ivajkin/core-js\n" +
    " * License: http://rock.mit-license.org\n" +
    " * © " +
    new Date().getFullYear() +
    " Tim Ivaikin \n" +
    " */"
  /* eslint-enable prefer-template */
};
