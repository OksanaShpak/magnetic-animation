import Magnet from './magnet.js';

let size = 100;
let magnets;

size = Math.floor(Math.random() * 200 + 10);

init();

window.onmousemove = handleMagnetism;
window.onresize = init;

function init() {
  const rows = Math.floor((innerHeight - 16) / size);
  const cols = Math.floor((innerWidth - 16) / size);
  const count = rows * cols;

  const elements = Array.from({ length: count }, () => {
    const element = document.createElement('div');

    element.className = 'magnet';
    return element;
  });

  document.body.style.setProperty('--size', `${size}px`);
  document.body.style.setProperty('--col-count', cols);

  document.body.replaceChildren(...elements);
  magnets = elements.map(element => new Magnet(element));
}

function handleMagnetism(event) {
  const x = event.clientX;
  const y = event.clientY;

  magnets.forEach(magnet => magnet.rotateTowards(x, y));
}
