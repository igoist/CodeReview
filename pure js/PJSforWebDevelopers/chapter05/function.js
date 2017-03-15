var start_time = Date.now();

/* ======== Function ======== */

// console.log(sum(10, 10));

// var sumb = function sum(n1, n2) {
//   return n1 + n2;
// };

// console.log(sumb(10, 10));

// var sum = function(n1, n2) {
//   return n1 - n2;
// };

// function createComparisonFunction(propertyName) {
//   return function(obj1, obj2) {
//     var val1 = obj1[propertyName];
//     var val2 = obj2[propertyName];

//     if(val1 < val2) {
//       return -1;
//     } else if(val1 > val2) {
//       return 1;
//     } else {
//       return 0;
//     }
//   };
// }

// var data = [{name: "Zachary", age: 28}, {name: "Nicholas", age: 29}];

// data.sort(createComparisonFunction("name"));
// console.log(data[0]);

// data.sort(createComparisonFunction("age"));
// console.log(data[0]);

// function factorial(num) {
//   if(num <= 1) {
//     return 1;
//   } else {
//     // cmd: ['/usr/local/bin/node', '--use-strict', '--harmony', '/Users/Egoist/Documents/Egoist/js/pure js/function.js']
//     // 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
//     return num * arguments.callee(num - 1);
//   }
// }

// console.log(factorial(3));

// window.color = "red";
// var o = {color: "blue"};

// function sc() {
//   console.log(this.color);
// }

// sc();

// o.sc = sc;

// o.sc();

// function outer() {
//   inner();
// }

// function inner() {
//   console.log(arguments.callee.caller);
// }

// outer();

// function sum(num1, num2) {
//   return num1 + num2;
// }

// function calls1(num1, num2) {
//   return sum.apply(this, arguments);
// }

// function calls2(num1, num2) {
//   return sum.apply(this, [num1, num2]);
// }

// console.log(calls1(1, 2));
// console.log(calls2(1, 2));


// // console.log(calls1.toLocaleString());
// console.log(calls2.toString());


// var arr = new Array();

// console.log(arr);
// console.log(typeof arr);

// console.log();

// var name = "ppp";

function makeFunc() {
  var xname = "Mozilla";
  function displayName() {
    console.log(xname);
  }
  return displayName;
}


var myFunc = makeFunc();
myFunc();

// 闭包 closure Exp-1

// var Counter = (function() {
//   var privateCounter = 0;
//   function changeBy(val) {
//     privateCounter += val;
//   }
//   return {
//     increment: function() {
//       changeBy(1);
//     },
//     decrement: function() {
//       changeBy(-1);
//     },
//     value: function() {
//       return privateCounter;
//     }
//   }
// })();

// console.log(Counter.value()); /* logs 0 */
// Counter.increment();
// Counter.increment();
// console.log(Counter.value()); /* logs 2 */
// Counter.decrement();
// console.log(Counter.value()); /* logs 1 */

// 闭包 closure Exp-2

var list = [];

function showHelp(help) {
  console.log("messag:" + help);
}

function makeHelpCallback(help) {
  return function() {
    showHelp(help);
  };
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    // 1. 闭包中的匿名函数 提示:Don't make functions within a loop
    // list.push(function() {
    //   showHelp(item.help);
    // });
    // 2. 闭包中的匿名对象
    list.push(makeHelpCallback(item.help));
  }
}

setupHelp();



var o = {
  set current (str) {
    return this.log[this.log.length] = str;
  },
  log: []
};

console.log(o);
o.current = "a";
console.log(o);
o.current = "b";
console.log(o);







/* ======== Function End ======== */

var stop_time = Date.now();

console.log("this script last: " + (stop_time - start_time) + "s");

start_time = null;
stop_time = null;







