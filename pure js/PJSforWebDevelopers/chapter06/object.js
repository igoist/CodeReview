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

// 6.3 继承 inherit
// 6.3.1 原型链

// function SuperType() {
//   this.property = true;
// }

// SuperType.prototype.arg = "arg test";

// SuperType.prototype.getSuperValue = function() {
//   console.log("in getSuperValue: " + this.property);
//   return this.property;
// };

// function SubType() {
//   this.subproperty = false;
// }

// SubType.prototype = new SuperType();

// SubType.prototype.getSubValue = function() {
//   console.log("in getSubValue: " + this.subproperty);
//   console.log("SuperType.prototype.arg: " + this.arg);
//   console.log("SuperType.prototype.property: " + this.property);
//   return this.subproperty;
// };

// SubType.prototype.getSuperValue = function() {
//   console.log("Here !");
//   return this.property;
// };

// var instance = new SubType();
// instance.getSubValue();
// instance.getSuperValue();

// console.log(SuperType.prototype);
// SuperType.prototype.getSuperValue();  // 此时未定义
// console.log(instance instanceof Object);
// console.log(instance instanceof SubType);
// console.log(instance instanceof SuperType);

// console.log(Object.prototype.isPrototypeOf(instance));
// console.log(SuperType.prototype.isPrototypeOf(instance));
// console.log(SubType.prototype.isPrototypeOf(instance));



var n = new Number(12);
n.p = "d";
console.log(n);
console.log(n.p);


// p167 借用构造函数
// p168 组合继承

// function SuperType(name) {
//   this.name = name;
//   this.colors = ["r", "g", "b"];
// }

// SuperType.prototype.say = function() {
//   console.log(this.name);
// };

// function SubType(name, age) {
//   SuperType.call(this, name);
//   this.age = age;
// }

// SubType.prototype = new SuperType();

// SubType.prototype.sayAge = function() {
//   console.log(this.age);
// };

// var instance1 = new SubType("xtz", 23);
// instance1.colors.push("b");
// console.log(instance1.colors);
// instance1.say();
// instance1.sayAge();

// var instance2 = new SubType("et", 22);
// instance2.colors.push("c");
// console.log(instance2.colors);
// instance2.say();
// instance2.sayAge();

// p169 原型式继承

function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

// p171 寄生式继承

// function createAnother(original) {
//   var clone = object(original);
//   clone.sayHi = function() {
//     console.log("Hi !");
//   };
//   return clone;
// }

// var person = {
//   name: "xtz",
//   friends: ["aa", "bb", "cc"]
// };

// var anotherPerson = createAnother(person);

// anotherPerson.sayHi();
// console.log(anotherPerson.name);
// console.log(anotherPerson.friends);

// p172 寄生组合式

function inheritPrototype(subType, superType) {
  var prototype = object(superType.prototype); // Object.Create
  prototype.constructor = subType;
  subType.prototype = prototype;
}

function SuperType(name) {
  this.name = name;
  this.colors = ["r", "g", "b"];
}

SuperType.prototype.sayName = function() {
  console.log(this.name);
};

function SubType(name, age) {
  SuperType.call(this, name);
  this.age = age;
}

inheritPrototype (SubType, SuperType);

SubType.prototype.sayAge = function() {
  console.log(this.age);
};

// SubType.prototype.sayAge();

var instance = new SubType("Me", 22);
console.log(instance.name);
console.log(instance.colors);
instance.sayAge();

/* ======== Main End ======== */

var stop_time = Date.now();

console.log("this script last: " + (stop_time - start_time) + "ms");

start_time = null;
stop_time = null;
