export default class Magnet {
  constructor(element) {
    this.element = element;
    this.x = element.offsetLeft + element.offsetWidth / 2;
    this.y = element.offsetTop + element.offsetHeight / 2;
  }

  rotateTowards(x, y) {
    const dx = x - this.x;
    const dy = y - this.y;
    const angle = Math.atan2(dy, dx);
    this.rotation = angle * 180 / Math.PI;
    this.element.style.rotate = `${this.rotation}deg`;
  }
}