/**
 * Ponfile configuration
 * @class Ponfile
 * @augments PonRunner
 * @param {string|Object} config - Task configuration or it file path
 * @param {Object} [options={}] - Optional settings
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
    const {reservedTaskNames = []} = options

    const tasks = isRunner(config) ? config.tasks : config

    {
      const conflict = Object.keys(tasks).find((taskName) => reservedTaskNames.includes(taskName))
      if (conflict) {
        throw new Error(`Failed to register task with name: ${conflict} because it is reserved`)
      }
    }

    super(tasks, Object.assign({}, options, {
      doc: options.doc || config.doc || config.$doc
    }))
  }
}

module.exports = Ponfile
