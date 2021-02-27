const assert = require('../assert.js')
const makeArrayConsecutive2 = require('./makeArrayConsecutive2.js')

const testName = "makeArrayConsecutive2: "

const assertions = [
  { value  : false, 
    message: "Initial assertion: This assertion will be fail"},

  { value  : makeArrayConsecutive2([6, 2, 3, 8]) === 3,
    message: "First test can't fail" },

  { value  : makeArrayConsecutive2([6, 2, 3, 8]) !== 3,
    message: "Second assertion will be fail"},
  
  { value  : makeArrayConsecutive2([5, 4, 6]) === 0,
    message: "Third test can't fail"}
]

assertions.forEach(assert(testName))