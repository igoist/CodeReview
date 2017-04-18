// function* hello() {
//    var a = 'b';
//    yield 'a';
//    return a;
// }

// var gen = hello();

// console.log(gen);
// console.log(gen.next());
// console.log(gen.next());


function co(genFunc) {
  var gen = genFunc();

  var next = function(value){
     var ret = gen.next(value);
     if (!ret.done) {
       ret.value(next);
     }
  }

  next();
}

function cb(a) {
  return a;
}

function getAFromServer(url){
    /*
     *do something sync
     */
    return function(cb) {
       /*
        *do something async
        */
       var a = 'data A from server';
       cb(a);    // 返回读到的内容
    }
}

function getBFromServer(url){
    /*
     *do something sync
     */
    return function(cb) {
       /*
        *do something async
        */
       var b = 'data B from server';
       cb(b);    // 返回读到的内容
    }
}

co(function* (){
  var ret = yield getAFromServer('url of A');
  console.log(ret);  // 输出  data A from server
  var retB = yield getBFromServer('url of B');
  console.log(retB);  // 输出  data B from server
})