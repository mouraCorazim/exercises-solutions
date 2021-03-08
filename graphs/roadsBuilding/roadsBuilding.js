function makeSquareMatrixFillWith(length, content){
  const matrix = []

  for(let i = 0; i < length; i++){
    matrix[i] = []
    
    for(let j = 0; j < length; j++){
      matrix[i][j] = content
    }
  }

  return matrix
}

module.exports = (cities, roads) => {
  const matrix = makeSquareMatrixFillWith(cities, true)
  const roadsToBuild = []
  
  for(let i = 0; i < roads.length; i++){
    const j = roads[i][0]
    const k = roads[i][1]
    
    matrix[j][k] = false
    matrix[k][j] = false
  }
  
  for(let i = 1; i < cities; i++){
    for(let j = 0; j < i; j++){
      if(matrix[i][j]){
          roadsToBuild.push([j, i])
      }
    }
  }
    
  return roadsToBuild
}
