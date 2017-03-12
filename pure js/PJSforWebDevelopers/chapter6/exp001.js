/**
 * 作者：拾肆
 * 链接：https://zhuanlan.zhihu.com/p/25672454
 * 来源：知乎
 * 著作权归作者所有，转载请联系作者获得授权。
 */

var foo = (function(){
    var o = {
       a: 1,
       b: 2,
       /**更多属性**/
    };
    return function(key) {
        return o[key];
    };
})();

var test = {
    get o(){
        console.log('监听到正在获取属性o的值');
        return this._o;
    },
    set o(v){
        console.log('监听到正在设置属性o的值为：' + v);
        this._o = v;
        return this._o;
    }
};

test.o = 14; // 监听到正在设置属性o的值为：14
console.log(test.o); // 监听到正在获取属性o的值

var test = {};
Object.defineProperty(test, 'o', {
  get() {
     console.log('监听到正在获取属性o的值');
     return this._o;
  },
  set(v) {
    console.log('监听到正在设置属性o的值为：' + v);
    this._o = v;
    return this._o;
  }
});

test.o = 14; // 监听到正在设置属性o的值为：14
console.log(test.o); // 监听到正在获取属性o的值

console.log(foo('b'));

var a = {
  x: "xx",
  b: "bb",
  c: "cc",
  d: "dd"
};
console.log(Object.keys(a)); // ['a', 'b']

Object.defineProperty(Object.prototype, 'self', {
    get() {
        return this;
    }
});

var o = foo('self');
console.log(Object.keys(o)); // ['a', 'b']
console.log(Object.keys(a));
console.log(Object.keys(a.self));


