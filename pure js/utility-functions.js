
// 用于测试，返回 event list 具体信息可参照 MDN 标准事件属性列表: https://developer.mozilla.org/en/DOM/event#Properties
// 用法 addEventListener('event', logeventinfo, false);
// 第三个参数默认 false 可不加

function logeventinfo (ev) {
  var log = '';
  out = '<ul>';
  for (var i in ev) {
    if (typeof ev[i] === 'function' || i === i.toUpperCase()) {
      continue;
    }
    out += '<li><span>'+i+'</span>: '+ev[i]+'</li>';
  }
  log += out + '</ul>';
  console.log(log);
}

// window & document 相关顺序  一般用最慢的 4th: window.onload  window.load
// window - DOMContentLoaded - capture
// document - DOMContentLoaded - capture
// document - DOMContentLoaded - bubble
// window - DOMContentLoaded - bubble
// window - load - capture
// window - load - bubble
// window - onload
window.addEventListener('DOMContentLoaded', function() {
  console.log('window - DOMContentLoaded - capture'); // 1st
}, true);
document.addEventListener('DOMContentLoaded', function() {
  console.log('document - DOMContentLoaded - capture'); // 2nd
}, true);
document.addEventListener('DOMContentLoaded', function() {
  console.log('document - DOMContentLoaded - bubble'); // 2nd
});
window.addEventListener('DOMContentLoaded', function() {
  console.log('window - DOMContentLoaded - bubble'); // 3rd
});

window.addEventListener('load', function() {
  console.log('window - load - capture'); // 4th
}, true);
document.addEventListener('load', function(e) {
  /* Filter out load events not related to the document */
  if(['style','script'].indexOf(e.target.tagName.toLowerCase()) < 0)
    console.log('document - load - capture'); // DOES NOT HAPPEN
}, true);
document.addEventListener('load', function() {
  console.log('document - load - bubble'); // DOES NOT HAPPEN
});
window.addEventListener('load', function() {
  console.log('window - load - bubble'); // 4th
});

window.onload = function() {
  console.log('window - onload'); // 4th
};
document.onload = function() {
  console.log('document - onload'); // DOES NOT HAPPEN
};


// 先不参考其它现有的库，自己实现看看这类的 DOM 操作，先用返回 string 的方法 —— 后面估计要用到 bind

function addClassString(ec, _class) {
  var classNames = ec.split(/\s+/);
  classNames[classNames.length] = _class;

  return (classNames.join(" "));
}

function removeClassString(ec, _class) {
  var classNames = ec.split(/\s+/);
  for (var i = 0; i < classNames.length; i++) {
    if (classNames[i] == _class) {
      classNames.splice(i, 1);
      break;
    }
  }
  return (classNames.join(" "));
}