#问: 重写 Person.prototype = {...} 时，指定 constructor: Person 的意义

在看《JS高级程序设计》的第六章时，作为js 小菜鸡，有这么个疑惑：
在定义
```javascript
function Person() {
  this.name = "Egoist";
}

Person.prototype = {
  age: 22,
  sayName: function() {
    console.log(this.name);
    return this.name;
  }
};
```
或
```javascript
function Person() {
  this.name = "Egoist";
}

Person.prototype = {
  constructor: Person,  // 俩者区别在于这行!
  age: 22,
  sayName: function() {
    console.log(this.name);
    return this.name;
  }
};
```
之后运行
```javascript
var p1 = new Person();
var p2 = new Person();
p1.sayName();
p2.sayName();
```
貌似这没啥子区别呀！？不指定明明 constructor 默认也是指向了 Person
那么可不可以说这行 "constructor: Person" 并没卵用，一般只要你别故意指向 Person2，其实不需要写？
来个大兄弟解解惑呗，先谢过啦：）

======== 答问分割线 =======

答：基本没错，只纠正一点，constructor 此时是指向了 Object。
p155 书里原话 "如果 constructor 的值真的很重要，可以像下面这样特意讲它设置回适当的值..."
此外重设 constructor 会导致其 [[Enumerable]] 被设置为 True，默认情况下原生的 constructor 属性不可枚举
在 ES5 之后可通过
```javascript
Object.defineProperty(Person.prototype, "constructor", {
  enumerable: false,
  value: Person
});
```
来重设 constructor
看来小伙子看书还是欠仔细，要好好加油啊！






























