// Imports
import { createGrid, drawGrid, nextGeneration } from './grid.js';


// Start
let intervalId;

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
