/**
 * Lookup ponfile
 * @function lookup
 * @param {string} basedir
 */
'use strict'

const PATTERNS = 'Ponfile,Ponfile.js,Ponfile.json,ponfile,ponfile.js,ponfile.json'

const findup = require('findup-sync')

/** @function ponfile */
function ponfile (basedir) {
  for (let patten of PATTERNS.split(',')) {
    let found = findup(patten, {
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
