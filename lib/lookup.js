/**
 * Lookup ponfile
 * @function lookup
 * @param {string} basedir
 */
'use strict'

const PATTERNS = 'Ponfile.js,Ponfile.json,ponfile,Ponfile,ponfile.js,ponfile.json'

const findup = require('findup-sync')

/** @function ponfile */
function ponfile (basedir) {
  const found = findup(PATTERNS.split(','), {
    safe: true,
    cwd: basedir
  })
  if (found) {
    return found
  }
  throw new Error(`Ponfile not found: ${basedir}`)
}

module.exports = ponfile
