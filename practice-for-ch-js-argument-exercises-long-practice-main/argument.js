// function sum() {
//     let sum = 0;

//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     };
//     return sum;
// };

// function sum(...args) {
//     let sum = 0

//     args.forEach(arg => {
//         sum += arg
//     })
//     return sum
// }

// console.log(sum(1, 2, 3, 4) === 10)
// console.log(sum(1, 2, 3, 4, 5) === 15)


// Function.prototype.myBind = function (ctx) {
//     let originalFunc = this;
//     let bindArgs = Array.from(arguments).slice(1);
    
//     return function() {
//         let callArgs = Array.from(arguments);
//         return originalFunc.apply(ctx, bindArgs.concat(callArgs));
//     };
// }

// Function.prototype.myBind = function(ctx, ...bindArgs) {
//     let originalFunc = this;
    
//     return function(...callArgs) {
//         return originalFunc.apply(ctx, bindArgs.concat(callArgs));
//     };
// }


// class Cat {
//     constructor(name) {
//       this.name = name;
//     }
  
//     says(sound, person) {
//       console.log(`${this.name} says ${sound} to ${person}!`);
//       return true;
//     }
//   }
  
//   class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   const markov = new Cat("Markov");
//   const pavlov = new Dog("Pavlov");
  
//   markov.says("meow", "Ned");
//   // Markov says meow to Ned!
//   // true
  
//   // bind time args are "meow" and "Kush", no call time args
//   markov.says.myBind(pavlov, "meow", "Kush")();
//   // Pavlov says meow to Kush!
//   // true
  
//   // no bind time args (other than context), call time args are "meow" and "a tree"
//   markov.says.myBind(pavlov)("meow", "a tree");
//   // Pavlov says meow to a tree!
//   // true
  
//   // bind time arg is "meow", call time arg is "Markov"
//   markov.says.myBind(pavlov, "meow")("Markov");
//   // Pavlov says meow to Markov!
//   // true
  
//   // no bind time args (other than context), call time args are "meow" and "me"
//   const notMarkovSays = markov.says.myBind(pavlov);
//   notMarkovSays("meow", "me");
//   // Pavlov says meow to me!
//   // true


// function curriedSum(numArgs) {
//     const nums = [];

//     return function _curriedSum(num) {
//         nums.push(num);
//         if (nums.length === numArgs) {
//             let sum = 0

//             nums.forEach(ele => {
//                 sum += ele
//             })
//             return sum
//         } else {
//             return _curriedSum
//         }
//     };
// };

// Function.prototype.makeCurry = function(numArgs) {
//     const args = [];
//     const originalFunc = this;
  
//     return function _curried(arg) {
//       args.push(arg);
  
//       if (args.length >= numArgs) {
//         // return originalFunc.apply(null, args);
//         return originalFunc(...args)
//       } else {
//         return _curried;
//       }
//     }
//   };
  
// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56

// Function.prototype.inherits = function (Parent) {
//     function Surrogate (){};
//     Surrogate.prototype = Parent.prototype;
//     this.prototype = new Surrogate();
//     this.prototype.constructor = this;
// }

// Function.prototype.inherits = function (Parent) {
//     this.prototype = Object.create(Parent.prototype);
//     this.prototype.constructor = this;
// };

// function MovingObject () {
// };
// MovingObject.prototype.moves = function() {
//     console.log("I move");
// };

// function Ship () {
// };
// Ship.inherits(MovingObject);
// Ship.prototype.ships = function() {
//     console.log("I am a Ship");
// };

// function Asteroid () {
// };
// Asteroid.inherits(MovingObject);
// Asteroid.prototype.asteroids = function () {
//     console.log("Die dinosaurs!");
//     };

// const ship = new Ship();
// const ast = new Asteroid();

// console.log(ship.moves());
// console.log(ast.moves());
// console.log(ast.ships());
// console.log(ship.asteroids());