var start_time = Date.now();

/* ======== Main: DOM Extension ======== */

// Element Traversal 元素遍历 5 大属性

// childElementCount
// firstElementChild
// lastElementChild
// previousElementSibling
// nextElementSibling


// 下面这几行是反面教材
// for (var i = 0, len = values.length; i < len; i++) {
//   ul.innerHTML = "<li>" + values[i] + "</li>"; // 要避免这种频繁操作！！这边每次循环要访问两次 innerHTML
// }










/* ======== Main End ======== */

var stop_time = Date.now();

console.log("this script last: " + (stop_time - start_time) + "ms");

start_time = null;
stop_time = null;