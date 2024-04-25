// Imports
import { countCells, countNeighbors } from './count.js';


// Estabelecendo as dimenções do grid.
const rows = 20;
const cols = 20;

// Estado inicial do grid
let grid = [];

// Criando o grid
function createGrid() {
  for (let i = 0; i < rows; i++) {
    grid[i] = [];

    for (let j = 0; j < cols; j++) {
      grid[i][j] = Math.random() > 0.5 ? 1 : 0;
    }
  }
}

// Desenhando as células no grid
function drawGrid() {
  const gridContainer = document.getElementById('grid-container');
  gridContainer.innerHTML = '';

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const cell = document.createElement('div');
      cell.className = grid[i][j] ? 'alive' : 'dead';
      gridContainer.appendChild(cell);
    }
  }

  document.getElementById('alive-count').querySelector('span').innerHTML = countCells(grid).alive;
  document.getElementById('dead-count').querySelector('span').innerHTML = countCells(grid).dead;
}

// Próxima geração de células
function nextGeneration() {
  // Cria uma cópia do grid
  let newGrid = JSON.parse(JSON.stringify(grid));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let neighbors = countNeighbors(i, j, grid, rows, cols);

      if (grid[i][j] === 1) {
        if (neighbors < 2 || neighbors > 3) {
          // Morte por solidão ou superpopulação
          newGrid[i][j] = 0;
        }
      } else if (neighbors === 3){
        // Nascimento
        newGrid[i][j] = 1;
      }
    }
  }

  grid = newGrid;
}

export {
  createGrid,
  drawGrid,
  nextGeneration,
};
