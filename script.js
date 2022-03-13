
const container = document.querySelector('#container');

function createGrid(n) {
    for (let i = 0; i < n * n; n * i++) {
const div = document.createElement('div');
div.setAttribute('class', 'square');
container.appendChild(div);
sketch()
    };
    $('.square').width(960/n);
    $('.square').height(960/n);
};
createGrid(16);

function sketch() {
let hover = document.querySelectorAll('.square');
hover.forEach(hover => {
hover.addEventListener('mouseenter', (e) => {
  event.target.style.backgroundColor = "black";
});
});
}

function clearGrid() {
    $('.square').remove();
};

function newGrid() {
    let refresh = prompt('grid size?');
    clearGrid();
    createGrid(refresh);
}

const body = document.querySelector('body');
body.querySelector('#btn').addEventListener('click', newGrid); {
}

