(function () {
  if (typeof Circles === "undefined") {
    window.Circles = {};
  }

  var Circle = Circles.Circle = function (centerX, centerY, radius, color) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
    this.color = color;
  };

  })();
