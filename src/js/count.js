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
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const row = (x + i + rows) % rows;
      const col = (y + j + cols) % cols;
      count += grid[row][col];
    }
  }

  count -= grid[x][y];
  return count;
}

export {
  countCells,
  countNeighbors,
};
