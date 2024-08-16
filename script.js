import Magnet from './magnet.js';

const magnetElements = [...document.querySelectorAll('.magnet')];
const magnets = magnetElements.map(element => new Magnet(element));

window.onmousemove = handleMagnetism;

function handleMagnetism(event) {
  const x = event.clientX;
  const y = event.clientY;

  magnets.forEach(magnet => magnet.rotateTowards(x, y));
}
