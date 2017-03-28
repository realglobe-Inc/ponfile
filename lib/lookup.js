/**
 * Lookup ponfile
 * @function lookup
 * @param {string} basedir
 */
'use strict'

const PATTERNS = 'Ponfile,Ponfile.js,Ponfile.json,ponfile,ponfile.js,ponfile.json'

const findout = require('findout')

/** @function ponfile */
function ponfile (basedir) {
  for (let patten of PATTERNS.split(',')) {
    let found = findout.resolve(patten, {
      safe: true,
      cwd: basedir
    })
    if (found) {
      return found
    }
  }
  throw new Error(`Ponfile not found: ${basedir}`)
}

module.exports = ponfile
