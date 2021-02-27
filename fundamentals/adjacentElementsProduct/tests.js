const {assertions, assert} = require('../../assert.js')
const adjacentElementsProduct = require('./adjacentElementsProduct.js')

const testName = "adjacentElementsProduct: "

const x = {input: [3, 6, -2, -5, 7, 3], expected: 21}
const y = {input: [5, 1, 2, 3, 1, 4]  , expected: 6}

assertions(adjacentElementsProduct, x, y).forEach(assert(testName))