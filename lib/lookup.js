'use strict'

const path = require('path')
const findup = require('findup-sync')

const PATTERNS = 'Ponfile.js,Ponfile.json,ponfile,Ponfile,ponfile.js,ponfile.json'
const DEV_PATTERNS = PATTERNS.split(',').map((filename) => {
  const extname = path.extname(filename)
  const basename = path.basename(filename, extname)
  return `${basename}.dev` + extname
}).join(',')


/**
 * Lookup ponfile
 * @function lookup
 * @param {string} basedir
 */
function lookup (basedir) {
  const isProduction = process.env.NODE_ENV === 'production'
  const patterns = [
    ...(isProduction ? [] : DEV_PATTERNS.split(',')),
    ...PATTERNS.split(',')
  ].filter(Boolean)
  const found = findup(patterns, {
    safe: true,
    cwd: basedir
  })
  if (found) {
    return found
  }
  throw new Error(`Ponfile not found: ${basedir}`)
}

module.exports = lookup
