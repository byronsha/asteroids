function sum() {
  var numbers = [].slice.call(arguments);
  var total = 0;

  numbers.forEach(function(el) {
    total += el;
  });

  return total;
}

// console.log(sum(1, 2, 3, 4) === 10);
// console.log(sum(1, 2, 3, 4, 5) === 15);

Function.prototype.myBind = function(context) {
  var boundArgs = [].slice.call(arguments, 1);
  var fn = this;

  console.log(context);
  return function() {
    var extraArgs = [].slice.call(arguments);
    return fn.apply(context, boundArgs.concat(extraArgs));
  };
};

// function Cat(name) {
//   this.name = name;
// }
//
// Cat.prototype.says = function (sound) {
//   console.log(this.name + " says " + sound + "!");
// };
//
// var markov = new Cat("Markov");
// var breakfast = new Cat("Breakfast");
//
// markov.says("meow");
// // Markov says meow!
//
// markov.says.myBind(breakfast, "meow")();
// // Breakfast says meow!
//
// markov.says.myBind(breakfast)("meow");
// // Breakfast says meow!
//
// var notMarkovSays = markov.says.myBind(breakfast);
// notMarkovSays("meow");
// Breakfast says meow!

function curriedSum(numArgs) {
  var numbers = [];

  var _curriedSum = function(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      var total = 0;
      numbers.forEach(function(element) {
        total += element;
      });
      return total;
    } else {
      return _curriedSum;
    }
  };
  return _curriedSum;
}

// var total = curriedSum(4);
// console.log(total(5)(30)(20)(1)); // => 56

Function.prototype.curry = function(numArgs) {
  var numbers = [];
  var fn = this;

  var _curried = function(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return fn.apply(fn, numbers);
    } else {
      return _curried;
    }
  };
  return _curried;
};

var total = function(numbers) {
  numbers.forEach(function (el) {
    console.log(el);
  });
  // console.log(numbers);
};
console.log(sum.curry(4)(5)(30)(20)(1));

// fn.call(obj, arg1, arg2, arg3)
// fn.app(obj, [arg1, arg2, arg3])
