var start_time = Date.now();

/* ======== Main: Scope ======== */

var a = "1";

function aaa() {
  // var a = "3";
  console.log(a);
}

function bbb() {
  var a = "2";
  aaa();
}

aaa();
bbb();

// > * 为了解决块级作用域，ES6引入了新的关键字let，用let替代var可以申明一个块级作用域的变量



for (var i = 0; i < 5; i++) {

  // setTimeout(function() {
  //     console.log(new Date, x);
  // }, 1000);

  // It's mine implement 😙
  // var tmp = function(x=i) {
  //   setTimeout(function() {
  //       console.log(new Date, x);
  //   }, 1000);
  // };
  // tmp();
  (function(x) {
    setTimeout(function() {
        console.log(new Date, x);
    }, 1000);
  })(i);

}

console.log(new Date, i);

var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test.call(this));
console.log(this);

/* ======== Main End ======== */

var stop_time = Date.now();

console.log("this script last: " + (stop_time - start_time) + "ms");

start_time = null;
stop_time = null;