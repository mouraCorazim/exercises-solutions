const {assertions, assert} = require('../../assert.js')
const sortByHeight = require('./sortByHeight.js')

const testName = "sortByHeight: "

const x = {input   : [2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1],
           expected: [1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2]}

const y = {input   : [23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3],
           expected: [1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77]}

assertions(sortByHeight, x, y).forEach(assert(testName))