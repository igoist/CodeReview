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














/* ======== Main End ======== */

var stop_time = Date.now();

console.log("this script last: " + (stop_time - start_time) + "ms");

start_time = null;
stop_time = null;