// Stores a Game instance.
// Stores a canvas context to draw the game into.
// Installs key listeners to move the ship and fire bullets.
// Installs a timer to call Game#step.

/* globals Asteroids */
(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function(ctx) {
    this.game = new Asteroids.Game(ctx.canvas.width, ctx.canvas.height);
    this.ctx = ctx;
  };

  GameView.prototype.start = function() {
    setInterval(function () {
      this.game.draw(this.ctx);
      this.game.step();
    }.bind(this), 20);
  };
  // Util.distance = function(p1, p2) {
  //   return Math.sqrt(Math.pow((p1[0] - p2[0]), 2) + Math.pow((p1[1] - p2[1]), 2));
  // };

})();
