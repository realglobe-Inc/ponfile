/**
 * Ponfile configuration
 * @class Ponfile
 * @augments PonRunner
 * @param {string|Object} config
 */
'use strict'

const lookup = require('./lookup')
const {isRunner, PonRunner} = require('pon-runner')

/** @lends Ponfile */
class Ponfile extends PonRunner {
  constructor (config = process.cwd(), options = {}) {
    if (typeof config === 'string') {
      config = require(lookup(config))
    }
    const tasks = isRunner(config) ? config.tasks : config
    super(tasks, options)
  }
}

module.exports = Ponfile
