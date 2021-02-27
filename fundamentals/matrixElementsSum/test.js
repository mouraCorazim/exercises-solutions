const {assertions, assert} = require('../../assert.js')
const matrixElementsSum = require('./matrixElementsSum.js')

const testName = "matrixElementsSum: "

const x = {input: [[1,1,1], [2,2,2], [3,3,3]], expected: 18}

const y = {input: [[4,0,1], [10,7,0], [0,0,0], [9,1,2]], expected: 15}

assertions(matrixElementsSum, x, y).forEach(assert(testName))