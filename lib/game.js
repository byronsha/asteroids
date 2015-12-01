// Holds collections of the asteroids, bullets, and your ship.
// #step method calls #move on all the objects, and #checkCollisions
// checks for colliding objects. #draw(ctx) draws the game.
// Keeps track of dimensions of the space; wraps objects around when
// they drift off the screen.

/* globals Asteroids */

(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var DIM_X;
  var DIM_Y;
  var NUM_ASTEROIDS = 1000;

  var Game = Asteroids.Game = function(maxX, maxY) {
    DIM_X = maxX;
    DIM_Y = maxY;

    this.asteroids = [];
    this.addAsteroids();
  };

  Game.prototype.addAsteroids = function() {
    for (var i = 0; i < NUM_ASTEROIDS; i++) {
      this.asteroids.push(
        new Asteroids.Asteroid(this.randomPosition(), this)
      );
    }
  };

  Game.prototype.randomPosition = function() {
    var x = (Math.random() * DIM_X);
    var y = (Math.random() * DIM_Y);

    return [x, y];
  };

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, DIM_X, DIM_Y);
    this.asteroids.forEach(function(asteroid) {
      asteroid.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function() {
    this.asteroids.forEach(function(asteroid) {
      asteroid.move();
    });
  };

  Game.prototype.wrap = function(pos) {
    if (pos[0] >= DIM_X) {
      pos[0] = 0;
    } else if (pos[0] <= 0) {
      pos[0] = DIM_X;
    }
    if (pos[1] >= DIM_Y) {
      pos[1] = 0;
    } else if (pos[1] <= 0) {
      pos[1] = DIM_Y;
    }
    return pos;
  };

  Game.prototype.checkCollisions = function() {
    for (var i = 0; i < this.asteroids.length; i++) {
      for (var j = 0; j < this.asteroids.length; j++) {
        if (i != j) {
          if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {
            this.asteroids[i].collideWith(this.asteroids[j]);
          }
        }
      }
    }
  };

  Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.remove = function(asteroid) {
    this.asteroids.splice(this.asteroids.indexOf(asteroid), 1);
  };


})();
