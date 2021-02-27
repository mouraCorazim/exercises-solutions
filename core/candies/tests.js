const {assertions, assert} = require('../../assert.js')
const candies = require('./candies.js')

const testName = "candies: "

const x = {params: [4, 15], expected: 12}
const y = {params : [9, 100], expected: 99}

assertions(candies, x, y).forEach(assert(testName))