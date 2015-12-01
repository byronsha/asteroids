/* globals Asteroids */
(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Util = Asteroids.Util = {};

  Util.inherits = function(ChildClass, SuperClass) {
    function Surrogate() {}
    Surrogate.prototype = SuperClass.prototype;
    ChildClass.prototype = new Surrogate();
    ChildClass.prototype.constructor = ChildClass;
  };

  Util.randomVec = function(length) {
    var dx = (Math.random() * 2 - 1) * length;
    var dy = (Math.random() * 2 - 1) * length;

    return [dx, dy];
  };

  Util.distance = function(p1, p2) {
    return Math.sqrt(Math.pow((p1[0] - p2[0]), 2) + Math.pow((p1[1] - p2[1]), 2));
  };

})();
