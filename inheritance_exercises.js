Function.prototype.inherits = function(superclass) {
  function Surrogate() {}
  Surrogate.prototype = superclass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

// function MovingObject (name) {
//   this.name = name;
// }
//
// function Ship (name) {
//   MovingObject.call(this, name);
// }
//
// Ship.inherits(MovingObject);
//
// Ship.prototype.sinks = function() {
//   console.log(this.name + " sinks!");
// };
//
// var newShip = new Ship("winnie");
// console.log(newShip.name);
// newShip.sinks();

/////////////////////////////////////////
// function Dog (name) {
//   this.name = name;
// }
//
// Dog.prototype.bark = function () {
//   console.log(this.name + " barks!");
// };
//
// function Corgi (name) {
//   Dog.call(this, name);
// }
//
// Corgi.inherits(Dog);
//
// Corgi.prototype.waddle = function () {
//   console.log(this.name + " waddles!");
// };
//
// var blixa = new Corgi("Blixa");
// blixa.bark();
// blixa.waddle();
