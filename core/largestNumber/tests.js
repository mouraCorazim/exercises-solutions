const {assertions, assert} = require('../../assert.js')
const largestNumber = require('./largestNumber.js')

const testName = "largestNumber: "

const x = {input: 2, expected: 99}
const y = {input: 5, expected: 99999}

assertions(largestNumber, x, y).forEach(assert(testName))