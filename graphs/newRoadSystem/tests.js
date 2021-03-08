const {assertions, assert} = require('../../assert.js')
const newRoadSystem = require('./newRoadSystem.js')

const testName = "newRoadSystem: "

const x = {input   : [[false,true ,false,false], 
                      [false,false,true ,false], 
                      [true ,false,false,true ], 
                      [false,false,true ,false]],

           expected: true}

const y = {input   : [[false,true ,false], 
                      [false,false,false], 
                      [true ,false,false]],

           expected: false}

assertions(newRoadSystem, x, y).forEach(assert(testName))