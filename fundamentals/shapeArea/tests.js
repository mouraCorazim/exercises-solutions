const {assertions, assert} = require('../../assert.js')
const shapeArea = require('./shapeArea.js')

const testName = "shapeArea: "

const x = {input: 5   , expected: 41}
const y = {input: 7000, expected: 97986001}

assertions(shapeArea, x, y).forEach(assert(testName))