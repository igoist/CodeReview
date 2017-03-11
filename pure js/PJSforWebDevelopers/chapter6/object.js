var start_time = Date.now();

/* ======== Main: Object ======== */

// var person = {
//   name: "xtz",
//   sn: function() {
//     console.log(this.name);
//   }
// };

// function test() {
//   var name = "test";
//   return function() {
//     person.sn();
//   };
// }

// console.log(test());

// test()();

// var newf = new test();

// console.log(newf);
// newf();

// function Person() {
//   this.name = "Egoist";
//   this.friends = ["a", "b"];
// }

// Person.prototype.name = "Egoist";
// Person.prototype.age = 22;
// Person.prototype.job = "Web Engineer";
// Person.prototype.sayName = function() {
//   console.log(this.name);
// };

// Person.prototype = {
//   constructor: Person,
//   // name: "Egoist",
//   age: 22,
//   job: "Engineer",
//   // friends: ["a", "b"],
//   sayName: function() {
//     // console.log(this.name);
//     console.log(this.friends);
//     return this.name;
//   }
// };

// var keys = Object.keys(Person.prototype);
// console.log(keys);
// console.log(Person.prototype.sayName);
// console.log(Object.getOwnPropertyNames(Person.prototype));

// var msg = "Test";

// console.log(msg.startsWith("Te"));

// String.prototype.startsWith = function(text) {
//   return this.indexOf(text) == 0;
// };

// above👆 don't care
// #6.2.5 动态原型模式 dynamic prototype model

// function Person(name="EE", age=22, job="engineer") {
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   if(typeof this.sayName != "function") {
//     Person.prototype.sayName = function() {
//       console.log(this.name);
//     };
//   }
// }

// #6.2.6 寄生构造函数模式 parasitic constructor model

// function Person(name="EE", age=22, job="engineer") {
//   var o = new Object();
//   o.name = name;
//   o.age = age;
//   o.job = job;
//   o.sayName = function() {
//     console.log(this.name);
//     console.log(arguments);
//   };
//   return o;
// }

// function SpecialArray() {
//   var values = new Array();
//   values.push.apply(values, arguments);
//   values.toPipedString = function() {
//     return this.join("*|*");
//   };
//   return values;
// }

// var colors = new SpecialArray("r", "g", "b");
// console.log(colors.toPipedString());

// #稳妥构造函数模式

// is the same with above
// function Person(name="EE", age=22, job="engineer") {
//   var o = new Object();
//   o.name = name;
//   o.age = age;
//   o.job = job;
//   o.sayName = function() {
//     console.log(this.name);
//     console.log(arguments);
//   };
//   return o;
// }
// so there is no such a setter function that could change the value of properties

// var p1 = new Person();
// var p2 = new Person("p2");
// p1.sayName();
// p2.friends.push = "22";
// p2.sayName();
// p1.sayName();

/* ======== Main End ======== */

var stop_time = Date.now();

console.log("this script last: " + (stop_time - start_time) + "ms");

start_time = null;
stop_time = null;
