// old way
// var name = 'zach';

// while (true) {
//     var name = 'obama';
//     console.log(name);  //obama
//     break;
// }

// var t = function() {
//   var name = "xtz";
//   console.log(name); // xtz
// }();

// console.log(name);  //obama

let name = 'zach';

while (true) {
    let name = 'obama';
    console.log(name);  //obama
    break;
}

// var t = function() {
//   let name = "xtz";
//   console.log(name); // xtz
// }();

console.log(name);  //zach

// var obj = {
//   a: "aa",
//   b: 123,
//   c: "cc",
//   x: ""
// };
// for (var [key, value] in obj ){
//   console.log(key + "'s phone number is: " + value);
// }

let dog = {type: 'animal', many: 2};
let { type, many} = dog;
console.log(type, many, dog);   //animal 2
