/**
 * Test case for ponfile.
 * Runs with mocha.
 */
'use strict'

const Ponfile = require('../lib/ponfile.js')
const { ok } = require('assert')


describe('ponfile', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Ponfile', async () => {
    let ponfile = new Ponfile(`${__dirname}/../misc/mocks`)
    ok(ponfile)
  })
})

/* global describe, before, after, it */
