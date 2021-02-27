const assert = require('../assert.js')
const shapeArea = require('./sortByHeight.js')

const testName = "sortByHeight: "

const x = [2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1]
const y = [23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]

const assertions = [
  { value  : false,
    message: "Initial assertion: This assertion will be fail"},

  { value  : sortByHeight(x) === [1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2],
    message: "First test can't fail" },

  { value  : sortByHeight(x) !== [1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2],
    message: "Second assertion will be fail"},
  
  { value  : sortByHeight(y) === [1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77],
    message: "Third test can't fail"}
]


assertions.forEach(assert(testName))