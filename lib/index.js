/**
 * Configuration file for pon
 * @module ponfile
 */

'use strict'

const create = require('./create')
const lookup = require('./lookup')
const Ponfile = require('./ponfile')

const lib = create.bind(this)

Object.assign(lib, Ponfile, {
  create,
  lookup,
  Ponfile
})

module.exports = lib
