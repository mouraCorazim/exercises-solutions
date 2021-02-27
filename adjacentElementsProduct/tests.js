const assert = require('../assert.js')
const adjacentElementsProduct = require('./adjacentElementsProduct.js')

const testName = "adjacentElementsProduct: "

const x = [3, 6, -2, -5, 7, 3]
const y = [5, 1, 2, 3, 1, 4]

const assertions = [
  { value  : false, 
    message: "Initial assertion: This assertion will be fail"},

  { value  : adjacentElementsProduct(x) === 21,
    message : "First test can't fail" },

  { value  : adjacentElementsProduct(x) !== 21,
    message: "Second assertion will be fail"},
  
  { value  : adjacentElementsProduct(y) === 6,
    message: "Third test can't fail"}
]

assertions.forEach(assert(testName))