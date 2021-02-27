const {assertions, assert} = require('../../assert.js')
const makeArrayConsecutive2 = require('./makeArrayConsecutive2.js')

const testName = "makeArrayConsecutive2: "

const x = {input: [6, 2, 3, 8], expected: 3}
const y = {input: [5, 4, 6]   , expected: 0}

assertions(makeArrayConsecutive2, x, y).forEach(assert(testName))