import { createGrid, drawGrid, nextGeneration, grid, rows, cols } from '../js/grid.js';

// Testes para a função createGrid.
describe('createGrid function', () => {
  test('should create a grid with the correct dimensions', () => {
    createGrid();

    expect(grid.length).toBe(rows);

    // Verifica o número de colunas.
    expect(grid.every(row => row.length === cols)).toBe(true);
  });

  test('should fill the grid with values between 0 and 1', () => {
    createGrid();

    // Verifica se os valores no grid estão dentro do intervalo esperado (0 ou 1).
    expect(grid.every(row => row.every(cell => cell === 0 || cell === 1))).toBe(true);
  });
});


// Testes para a função drawGrid.
describe('drawGrid function', () => {
  // Ambiente simulado para testar a função drawGrid.
  document.body.innerHTML = `
    <div id="grid-container"></div>
    <div id="alive-count"><span></span></div>
    <div id="dead-count"><span></span></div>
  `;

  test('should create HTML elements representing the grid', () => {
    drawGrid();

    const gridContainer = document.getElementById('grid-container');

    // Número de elementos criados é igual ao número de células no grid.
    expect(gridContainer.children.length).toBe(rows * cols);
  });
});


// Testes para a função nextGeneration.
describe('nextGeneration function', () => {
  createGrid()

  test('should generate the next generation correctly', () => {
    const initialGrid = JSON.parse(JSON.stringify(grid));

    nextGeneration();

    expect(grid).not.toEqual(initialGrid);
  });
});
