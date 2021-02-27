module.exports = testName => assertion => 
  console.assert(assertion.value, testName + assertion.message)