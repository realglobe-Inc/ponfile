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
  constructor (config = process.cwd()) {
    if (typeof config === 'string') {
      config = require(lookup(config))
    }
    let tasks = isRunner(config) ? config.tasks : config
    super(tasks)
  }
}

module.exports = Ponfile
