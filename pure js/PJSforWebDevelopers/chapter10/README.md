# 第 10 章：DOM





## 动态加载样式 css 示例

```css
var style = document.createElement("style");
style.type = "text/css";
style.appendChild(document.createTextNode(".SplitPane-left { color: #0f4; }"));
var head = document.getElementsByTagName("head")[0];
head.appendChild(style);
// 此处继续强调引用类型变量的值相当于地址
style.appendChild(document.createTextNode(".SplitPane-right { transform: rotateY(30deg); }"));
```


