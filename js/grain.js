// GRAIN CINEMATOGRFICO - canvas animado
class GrainEffect {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'grain-canvas';
    this.ctx = this.canvas.getContext('2d');
    document.body.prepend(this.canvas);
    this.resize();
    this.animate();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.canvas.width  = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  // Gera frame de rudo aleatrio a cada tick
  generateNoise() {
    const { width, height } = this.canvas;
    const imageData = this.ctx.createImageData(width, height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const value = Math.random() * 255;
      data[i]     = value; // R
      data[i + 1] = value; // G
      data[i + 2] = value; // B
      data[i + 3] = 255;   // A
    }
    this.ctx.putImageData(imageData, 0, 0);
  }

  animate() {
    this.generateNoise();
    // 12fps para grain - suficiente, no consome CPU
    setTimeout(() => requestAnimationFrame(() => this.animate()), 1000 / 12);
  }
}

document.addEventListener('DOMContentLoaded', () => new GrainEffect());
