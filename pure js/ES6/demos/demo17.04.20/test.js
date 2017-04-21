// let t = () => {
//   console.log('test');
// };

// t();

// var a = [];
// for (let i = 0; i < 10; i++) {
//   a[i] = function () {
//     console.log(i);
//   };
// }

// a[6]();


var t = () => {
  for (var i = 0; i < 3; i++) {
    console.log(i);
  }
};

// console.log(t);
// console.log(t());

t();

const foo = {};

// 为 foo 添加一个属性，可以成功
foo.prop = 123;
console.log(foo.prop); // 123