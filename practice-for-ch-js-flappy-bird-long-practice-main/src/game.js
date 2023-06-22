// const Level = require("./level")
import Level from "./level";

export default class FlappyBird {
  constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.restart(this.ctx)
  }

  animate(ctx) {
    this.drawBackground(ctx)
    // ctx.fillStyle = "red"
    // ctx.fillRect(100,100,400,300)
  }

  restart(ctx) {
    this.level = new Level(this.dimensions)
    this.animate(ctx)
  }
  
}

