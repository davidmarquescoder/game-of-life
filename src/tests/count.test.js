import { countCells, countNeighbors } from '../js/count.js';

// Tests countCells function
it('should correctly count the number of alive and dead cells in a matrix', () => {
  const matrix = [
    [0, 1, 0],
    [1, 1, 0],
    [0, 0, 1]
  ];
  const result = countCells(matrix);

  expect(result.dead).toBe(5);
  expect(result.alive).toBe(4);
});


// Tests countNeighbors function
const grid = [
  [0, 1, 0],
  [1, 1, 0],
  [0, 0, 1]
];
const rows = 3;
const cols = 3;

// Primeira linha do grid
it('should correctly count the number of neighbors for a cell in the grid', () => {
  const result = countNeighbors(0, 0, grid, rows, cols);
  expect(result).toBe(3);
});

it('should correctly count the number of neighbors for a cell in the grid', () => {
  const result = countNeighbors(0, 1, grid, rows, cols);
  expect(result).toBe(2);
});

it('should correctly count the number of neighbors for a cell in the grid', () => {
  const result = countNeighbors(0, 2, grid, rows, cols);
  expect(result).toBe(2);
});


// Segunda linha do grid
it('should correctly count the number of neighbors for a cell in the grid', () => {
  const result = countNeighbors(1, 0, grid, rows, cols);
  expect(result).toBe(2);
});

it('should correctly count the number of neighbors for a cell in the grid', () => {
  const result = countNeighbors(1, 1, grid, rows, cols);
  expect(result).toBe(3);
});

it('should correctly count the number of neighbors for a cell in the grid', () => {
  const result = countNeighbors(1, 2, grid, rows, cols);
  expect(result).toBe(3);
});


// Terceira linha do grid
it('should correctly count the number of neighbors for a cell in the grid', () => {
  const result = countNeighbors(2, 0, grid, rows, cols);
  expect(result).toBe(2);
});

it('should correctly count the number of neighbors for a cell in the grid', () => {
  const result = countNeighbors(2, 1, grid, rows, cols);
  expect(result).toBe(3);
});

it('should correctly count the number of neighbors for a cell in the grid', () => {
  const result = countNeighbors(2, 2, grid, rows, cols);
  expect(result).toBe(1);
});
