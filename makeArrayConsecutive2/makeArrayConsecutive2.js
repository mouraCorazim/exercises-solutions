const reduce = (xs, acc) => 
  xs.length > 1?
    reduce(xs.slice(1), acc + (xs[1] - (xs[0] + 1))): acc
    
module.exports = statues => reduce(statues.sort((a, b) => a - b), 0)