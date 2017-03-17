/**
 * 有关于 向 Array 实例 push Object 实例注意几点
 *
 *
 *
 */

function getObj(x) {
  var obj = new Object();
  obj.x = x;
  return obj;
}

var array = new Array();
var obj = new Object();
obj.a = "aa";

array.push(obj);

console.log(array);
obj.c = 33;

array.push(obj);
console.log(array);

array.push(getObj("123"));
console.log(array);
array.push(getObj("1234"));
console.log(array);
obj = {};
console.log(array);

var obg = getObj("123");
array.push(obg);
console.log(array);

obg.x = "321";
console.log(array); // suppose right
