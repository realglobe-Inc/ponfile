/**
 * Test case for ponfile.
 * Runs with mocha.
 */
'use strict'

const Ponfile = require('../lib/ponfile.js')
const { ok } = require('assert')
const co = require('co')

describe('ponfile', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Ponfile', () => co(function * () {
    let ponfile = new Ponfile(`${__dirname}/../misc/mocks`)
    ok(ponfile)
  }))
})

/* global describe, before, after, it */
