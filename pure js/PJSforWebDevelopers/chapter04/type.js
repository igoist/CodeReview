// 见 p70 中间位置：ECMAS 中所有函数都是按值传递
// 而对于 Object 这类的引用类型
// 在本例中，传入的是其地址的值
// 故调用 s(person) 其修改会在函数外部又反映
var person = new Object();
person.name = "person";

function s(obj) {
  obj.name = "x";
}

console.log(person.name);

s(person);

console.log(person.name);