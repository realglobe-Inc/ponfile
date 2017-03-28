/**
 * Create a Ponfile instance
 * @function create
 * @param {...*} args
 * @returns {Ponfile}
 */
'use strict'

const Ponfile = require('./ponfile')

/** @lends create */
function create (...args) {
  return new Ponfile(...args)
}

module.exports = create
