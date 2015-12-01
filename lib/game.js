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
  var NUM_ASTEROIDS = 25;

  var Game = Asteroids.Game = function(maxX, maxY) {
    DIM_X = maxX;
    DIM_Y = maxY;

    this.allObjects = [];
    this.addAsteroids();
  };

  Game.prototype.addAsteroids = function() {
    for (var i = 0; i < NUM_ASTEROIDS; i++) {
      this.allObjects.push(
        new Asteroids.Asteroid(this.randomPosition(), this)
      );
    }
  };

  Game.prototype.addShip = function() {
    var ship = new Asteroids.Ship(this.randomPosition(), this);
    this.allObjects.push(ship);
    return ship;
  };

  Game.prototype.randomPosition = function() {
    var x = (Math.random() * DIM_X);
    var y = (Math.random() * DIM_Y);

    return [x, y];
  };

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, DIM_X, DIM_Y);
    this.allObjects.forEach(function(object) {
      object.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function() {
    this.allObjects.forEach(function(object) {
      object.move();
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
    for (var i = 0; i < this.allObjects.length; i++) {
      for (var j = 0; j < this.allObjects.length; j++) {
        if (i != j) {
          if (this.allObjects[i].isCollidedWith(this.allObjects[j])) {
            this.allObjects[i].collideWith(this.allObjects[j]);
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
