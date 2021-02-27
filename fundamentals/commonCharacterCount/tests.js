const {assertions, assert} = require('../../assert.js')
const commonCharacterCount = require('./commonCharacterCount.js')

const testName = "commonCharacterCount "

const x = {params: ["zzzz", "zzzzzzz"], expected: 4}
const y = {params: ["abca", "xyzbac"] , expected: 3}

assertions(commonCharacterCount, x, y).forEach(assert(testName))