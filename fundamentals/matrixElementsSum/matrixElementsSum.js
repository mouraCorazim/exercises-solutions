module.exports = matrix => {
    
    let acc = 0
    
    for(let i = 0; i < matrix[0].length; i++)
        for(let j = 0; j < matrix.length; j++)
            matrix[j][i] == 0? j = matrix.length : acc += matrix[j][i]
    
    return acc
}