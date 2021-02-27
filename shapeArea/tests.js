const assert = require('../assert.js')
const shapeArea = require('./shapeArea.js')

const testName = "shapeArea: "

const assertions = [
  { value  : false,
    message: "Initial assertion: This assertion will be fail"},

  { value  : shapeArea(5) === 41,
    message: "First test can't fail" },

  { value  : shapeArea(5) !== 41,
    message: "Second assertion will be fail"},
  
  { value  : shapeArea(7000) === 97986001,
    message: "Third test can't fail"}
]


assertions.forEach(assert(testName))