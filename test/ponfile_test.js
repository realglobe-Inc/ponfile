/**
 * Test case for ponfile.
 * Runs with mocha.
 */
'use strict'

const Ponfile = require('../lib/ponfile.js')
const {ok} = require('assert')

describe('ponfile', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Ponfile', async () => {
    const ponfile = new Ponfile(`${__dirname}/../misc/mocks`)
    ok(ponfile)
  })

  it('From object', async () => {
    let caught
    try {
      new Ponfile({
        init: () => null
      }, {
        reservedTaskNames: ['init']
      })
    } catch (e) {
      caught = e
    }
    ok(caught)
  })
})

/* global describe, before, after, it */
