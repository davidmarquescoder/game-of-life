// Estabelecendo as dimenções do grid.
const rows = 20;
const cols = 20;

// Estado inicial do grid
let grid = [];

// Definindo os elementos que apresentarão algumas métricas na tela.
const aliveCount = document.getElementById('alive-count').querySelector('span');
const deadCount = document.getElementById('dead-count').querySelector('span');