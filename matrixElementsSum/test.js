const assert = require('../assert.js')
const matrixElementsSum = require('./matrixElementsSum.js')

const testName = "matrixElementsSum: "

const x = [[1,1,1], 
           [2,2,2], 
           [3,3,3]]

const y = [[4,0,1], 
           [10,7,0],
           [0,0,0], 
           [9,1,2]]

const assertions = [
  { value  : false, 
    message: "Initial assertion: This assertion will be fail"},

  { value  : matrixElementsSum(x) === 18,
    message: "First test can't fail" },

  { value  : matrixElementsSum(x) !== 18,
    message: "Second assertion will be fail"},
  
  { value  : matrixElementsSum(y) === 15,
    message: "Third test can't fail"}
]

assertions.forEach(assert(testName))