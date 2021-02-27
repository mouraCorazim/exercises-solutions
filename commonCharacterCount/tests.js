const assert = require('../assert.js')
const commonCharacterCount = require('./commonCharacterCount.js')

const testName = "commonCharacterCount "

const x1 = "zzzz"
const x2 = "zzzzzzz"
const y1 = "abca"
const y2 = "xyzbac"

const assertions = [
  { value  : false, 
    message: "Initial assertion: This assertion will be fail"},

  { value  : commonCharacterCount(x1, x2) === 4,
    message: "First test can't fail" },

  { value  : commonCharacterCount(x1, x2) !== 4,
    message: "Second assertion will be fail"},
  
  { value  : commonCharacterCount(y1, y2) === 3,
    message: "Third test can't fail"}
]

assertions.forEach(assert(testName))