const assert = require('../assert.js')
const adjacentElementsProduct = require('./adjacentElementsProduct.js')

const testName = "adjacentElementsProduct: "

const assertions = [
  { value  : false, 
    message: "Initial assertion: This assertion will be fail"},

  { value  : adjacentElementsProduct([3, 6, -2, -5, 7, 3]) === 21,
    message : "First test can't fail" },

  { value  : adjacentElementsProduct([3, 6, -2, -5, 7, 3]) !== 21,
    message: "Second assertion will be fail"},
  
  { value  : adjacentElementsProduct([5, 1, 2, 3, 1, 4]) === 6,
    message: "Third test can't fail"}
]

assertions.forEach(assert(testName))