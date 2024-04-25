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
            }

            else if (matriz[i][j] === 1) {
                alive++;
            }
        }
    }

    return { dead, alive };
}
