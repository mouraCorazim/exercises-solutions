module.exports = {
  assertions: (fn, x, y) => {
    if(x.params){
      return [{ value  : false, 
                message: "Initial assertion: This assertion will be fail"},

              { value  : fn(x.params[0], x.params[1]) === x.expected,
                message: "First test can't fail" },

              { value  : fn(x.params[0], x.params[1]) !== x.expected,
                message: "Second assertion will be fail"},
      
              { value  : fn(y.params[0], y.params[1]) === y.expected,
                message: "Third test can't fail"}]
    }
    else{
      return [{ value  : false, 
                message: "Initial assertion: This assertion will be fail"},

              { value  : fn(x.input) === x.expected,
                message: "First test can't fail" },

              { value  : fn(x.input) !== x.expected,
                message: "Second assertion will be fail"},
        
              { value  : fn(y.input) === y.expected,
                message: "Third test can't fail"}]
    }
  },

  assert: testName => assertion => 
    console.assert(assertion.value, testName + assertion.message)
}