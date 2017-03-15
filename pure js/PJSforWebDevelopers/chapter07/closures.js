var start_time = Date.now();

/* ======== Main: Closures ======== */

/* -------- Exp1 -------- */
var Switch = (function() {
  var secret = "string secret";
  return {
    get_s: function() {
      return secret;
    },
    set_s: function(new_secret) {
      secret = new_secret;
      return secret;
    }
  };
})();
// });  ---- without "()"，it's the problem
// everytime you invoke Switch(), a new Obj created
// console.log(Switch().get_s());          // string secret
// console.log(Switch().set_s("new st"));  // new st
// console.log(Switch().get_s());          // string secret

console.log(Switch.get_s());               // string secret
console.log(Switch.set_s("new st"));       // new st
console.log(Switch.get_s());               // new st

Switch = null; // recycle

/* -------- Exp2 -------- */

function createFunc() {
  var result = new Array();
  for (var i = 0; i < 10; i++) {
    result[i] = function() {
      return i;
    };
  }
  return result;
}

var res = createFunc();

// console.log(res[0]());  // 10
// console.log(res[2]());  // 10
// console.log(res[9]());  // 10
// of course

function createFunc() {
  var result = new Array();
  for (var i = 0; i < 10; i++) {
    result[i] = function(num) {
      return function() {
        return num;
      };
    }(i);
  }
  return result;
}

res = createFunc();

console.log(res[0]());  // 0
console.log(res[2]());  // 2
console.log(res[9]());  // 9

var tmp = function (num) {
  return function() {
    return num;
  };
} (7);
console.log(tmp());     // 7


/* -------- Exp3 private variable -------- */
(function() {

  var name = "";

  Person = function(value) {
    name = value;
  };

  Person.prototype.getName = function() {
    return name;
  };

  Person.prototype.setName = function(value) {
    name = value;
  };

}) ();

// var Person = function(value) {
//   var name = value;
// };

var p1 = new Person("p1");
console.log(typeof p1);
console.log(p1);
console.log(p1.getName());

var p2 = new Person("p2");
console.log(p1.getName());
console.log(p1.getName());

/* ======== Main End ======== */

var stop_time = Date.now();

console.log("this script last: " + (stop_time - start_time) + "s");

start_time = null;
stop_time = null;


