function sumInOutEdges(graph){
  const r = []
  
  for(let i = 0; i < graph.length; i++){
    let aux = 0
    for(let j = 0; j < graph[0].length; j++){
//           outgoing edge    incoming edge
      aux += (+graph[i][j]) + (-graph[j][i])
    }
    r.push(aux)
  }

  return r
}

function containNegativeNumber(array){
  for(let i = 0; i < array.length; i++) 
    if(r[i] < 0) 
      return false
  
  return true
}

module.export = (roadRegister) => {

    const r = sumInOutEdges(roadRegister)
    
    return containNegativeNumber(r)
}