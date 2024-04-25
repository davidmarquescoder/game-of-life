// Estabelecendo as dimenções do grid.
const rows = 20;
const cols = 20;

// Estado inicial do grid
let grid = [];

// Definindo os elementos que apresentarão algumas métricas na tela.
const aliveCount = document.getElementById('alive-count').querySelector('span');
const deadCount = document.getElementById('dead-count').querySelector('span');

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

  aliveCount.innerHTML = countCells(grid).alive;
  deadCount.innerHTML = countCells(grid).dead;
}

// Contagem de vizinhos
function countNeighbors(x, y) {
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

// Próxima geração de células
function nextGeneration() {
  // Cria uma cópia do grid
  let newGrid = JSON.parse(JSON.stringify(grid));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let neighbors = countNeighbors(i, j);

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

// Start
function startGame() {
  intervalId = setInterval(() => {
    nextGeneration();
    drawGrid();
  }, 100);
}

// Stop
function stopGame() {
  clearInterval(intervalId);
}

// Restart Game
function restartGame() {
  stopGame()
  createGrid()
  drawGrid()
}

document.getElementById('start-btn').addEventListener('click', startGame);
document.getElementById('stop-btn').addEventListener('click', stopGame);
document.getElementById('restart-btn').addEventListener('click', restartGame);

// Inicialização
createGrid()
drawGrid()
