const f = (xs, ys, acc) => g => 
  return ys[0] === -1? 
    g(xs, ys.slice(1), [...acc, -1]): g(xs.slice(1), ys.slice(1), [...acc, xs[0]])

const g = f => (xs, ys, acc) => 
  return ys.length?
      f(xs, ys, acc)(g(f)): acc

module.exports = a => {
    
  const ps: number[] = a.filter(x => x !== -1).sort((a, b) => a - b)
  
  return f(ps, a, [])(g(f))
}