/**
 * Ponfile configuration
 * @class Ponfile
 * @augments Pon
 * @param {string|Object} config
 */
'use strict'

const lookup = require('./lookup')
const { isPon, Pon } = require('pon')

/** @lends Ponfile */
class Ponfile extends Pon {
  constructor (config = process.cwd()) {
    if (typeof config === 'string') {
      config = require(lookup(config))
    }
    let tasks = isPon(config) ? config.tasks : config
    super(tasks)
  }
}

module.exports = Ponfile
