const assert = require('../assert.js')
const isLucky = require('./isLucky.js')

const testName = "isLucky: "

const x = 134008
const y = 239017
const z = 1010

const assertions = [
  { value  : false, 
    message: "Initial assertion: This assertion will be fail"},

  { value  : isLucky(x),
    message: "First test can't fail" },

  { value  : isLucky(y),
    message: "Second assertion will be fail"},
  
  { value  : isLucky(z),
    message: "Third test can't fail"}
]

assertions.forEach(assert(testName))