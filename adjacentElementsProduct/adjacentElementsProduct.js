const reduce = (xs, acc) => 
  xs.length > 1? 
    reduce(xs.slice(1), Math.max((xs[0] * xs[1]), acc)): acc

module.exports = inputArray => reduce(inputArray, inputArray[0] * inputArray[1])
