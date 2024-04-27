// Contagem de vivos e mortos
function countCells(matriz) {
  let alive = 0;
  let dead = 0;

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] === 0) {
        dead++;
      } else if (matriz[i][j] === 1) {
        alive++;
      }
    }
  }

  return { dead, alive };
}

// Contagem de vizinhos
function countNeighbors(x, y, grid, rows, cols) {
  let count = 0;
  // Define os deslocamentos relativos para cada vizinho.
  const offsets = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],           [0, 1],
    [1, -1], [1, 0], [1, 1]
  ];

  for (const [dx, dy] of offsets) {
    // Calcula as coordenadas do vizinho.
    const nx = x + dx;
    const ny = y + dy;
    // Verifica se o vizinho está dentro dos limites do grid.
    if (nx >= 0 && nx < rows && ny >= 0 && ny < cols) {
      count += grid[nx][ny];
    }
  }
  return count;
}

export {
  countCells,
  countNeighbors,
};
