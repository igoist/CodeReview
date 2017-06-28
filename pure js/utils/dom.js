/**
 * DOM 操作相关，看文件名就知道
 * 第一例，要处理 els，先从父元素 detach（跟 remove 的区别，你知不知道我不管，反正我知道） 移除
 * 操作完成再放回来
 */

var parent = $('.course.anchor p img')[0].parentNode;
var els = $('.course.anchor p img').detach();

var fragment = document.createDocumentFragment();
var tmpA = null;

for (var i = 0; i < 10; i++) {
  tmpA = document.createElement('a');
  tmpA.classList.add('fancybox');
  tmpA.dataset.fancybox = 'gallery';
  tmpA.append(els[i]);
  fragment.append(tmpA);
}

parent.append(fragment)

/**
 * 第二例
 */