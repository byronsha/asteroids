/* globals Asteroids */
// Spacerock. It inherits from MovingObject.
(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function(pos, game) {
    Asteroids.MovingObject.call(this, pos, Asteroids.Util.randomVec(20), Asteroid.RADIUS, Asteroid.COLOR, game);
  };

  Asteroid.COLOR = "#000000";
  Asteroid.RADIUS = 50;

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);



})();
