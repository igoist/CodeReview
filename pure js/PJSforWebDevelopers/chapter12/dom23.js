var start_time = Date.now();

/* ======== Main: DOM 2 & 3 ======== */

/*
 *  DOM2级核心
 *  DOM2级视图
 *  DOM2级事件（13章）
 *  DOM2级样式
 *  DOM2级遍历和范围
 *  DOM2级HTML
 *
 */


// 查询方式
var supportsDOM2Core = document.implementation.hasFeature("Core", "2.0");
var supportsDOM3Core = document.implementation.hasFeature("Core", "3.0");
var supportsDOM2HTML = document.implementation.hasFeature("HTML", "2.0");
var supportsDOM2Views = document.implementation.hasFeature("Views", "2.0");
var supportsDOM2XML = document.implementation.hasFeature("XML", "2.0");


var svg = document.querySelector("svg");
svg.namespaceURI;




document.implementation.hasFeature("CSS", "2.0");
document.implementation.hasFeature("CSS2", "2.0");
document.implementation.hasFeature("CSS3", "2.0");


// 属性获取
// t.style.item(2) || t.style[2]
// var prop = t.style.item(2)
// t.style.getPropertyValue(prop)

// 创建 & 删除
// document.styleSheets[1].insertRule("header h1 { color: #cfc !important; }", 0);
// document.styleSheets[1].deleteRule(0)

// 样式的计算
var a = document.querySelector(".corner-a");
document.defaultView.getComputedStyle(a); // 第二个参数是伪元素字符串，如：":after"、":hover"，当然也可省略 - 即为null


// 12.2.3 元素大小
// 偏移量

function getElementLeft(e) {
  var actualLeft = e.offsetLeft;
  var current = e.offsetParent;

  while (current !== null) {
    actualLeft += current.offsetLeft;
    current = current.offsetParent;
  }
  return actualLeft;
}

function getElementTop(e) {
  var actualTop = e.offsetTop;
  var current = e.offsetParent;

  while (current !== null) {
    actualTop += current.offsetTop;
    current = current.offsetParent;
  }
  return actualTop;
}





/* ======== Main End ======== */

var stop_time = Date.now();

console.log("this script last: " + (stop_time - start_time) + "ms");

start_time = null;
stop_time = null;