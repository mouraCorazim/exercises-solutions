const assert = require('../assert.js')
const shapeArea = require('./shapeArea.js')

const testName = "shapeArea: "

const x = 5
const y = 7000

const assertions = [
  { value  : false,
    message: "Initial assertion: This assertion will be fail"},

  { value  : shapeArea(x) === 41,
    message: "First test can't fail" },

  { value  : shapeArea(x) !== 41,
    message: "Second assertion will be fail"},
  
  { value  : shapeArea(y) === 97986001,
    message: "Third test can't fail"}
]


assertions.forEach(assert(testName))