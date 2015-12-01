/* globals Asteroids */
// Spacerock. It inherits from MovingObject.
(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function(pos, game) {
    Asteroids.MovingObject.call(this, pos, Asteroids.Util.randomVec(1), Asteroid.RADIUS, Asteroid.COLOR, game);
  };

  Asteroid.COLOR = "#000000";
  Asteroid.RADIUS = 25;

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.collideWith = function(otherObject) {
    if (otherObject instanceof Asteroids.Ship) {
      otherObject.relocate();
    }
  };

})();
