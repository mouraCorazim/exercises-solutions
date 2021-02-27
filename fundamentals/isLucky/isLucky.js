const c = (x, acc) => x < 1? acc: c(x / 10, acc + 1)

const f = (x, acc, digits) => g => x < 1? acc: f(x / 10, g(x, acc, digits), digits - 1)(g)

const g = h => (x, acc, digits) => digits > h? acc + Math.floor(x % 10): acc - Math.floor(x % 10)

module.exports = n => f(n, 0, c(n, 0))(g(c(n, 0) / 2)) == 0