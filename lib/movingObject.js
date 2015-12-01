/* globals Asteroids */
// Base class for anything that moves.
// Most important methods are #move, #draw(ctx),
// #isCollidedWith(otherMovingObject).

(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject = function(pos, vel, radius, color, game) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
    this.game = game;
  };

  MovingObject.prototype.draw = function(ctx) {
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 5;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.stroke();
  };

  MovingObject.prototype.move = function() {
    this.pos[0] = this.pos[0] + this.vel[0];
    this.pos[1] = this.pos[1] + this.vel[1];

    return this.game.wrap(this.pos);
  };

  MovingObject.prototype.isCollidedWith = function(otherMovingObject) {
    if (Asteroids.Util.distance(this.pos, otherMovingObject.pos) <
      this.radius + otherMovingObject.radius) {
      return true;
    } else {
      return false;
    }
  };

  
})();
//
// var mo = new Asteroids.MovingObject(
//   [30, 30], [10, 10], 5, "#00FF00"
// );
// ctx = canvasEl.getContext("2d");
// mo.draw(ctx);
