const replace = (acc, curr) => acc.replace(curr, ".")

module.exports = (s1, s2) => s1.split("")
                               .reduce(replace, s2)
                               .replace(/[^.]/g, "")
                               .length