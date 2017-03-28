'use strict'

const ponfile = require('ponfile')

// Lookup and load a Ponfile configuration
let config = ponfile(process.cwd())
console.log(config)
