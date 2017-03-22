var start_time = Date.now();

/* ======== Main: DOM ======== */


var d1 = document.getElementById("d1");

var d2 = document.getElementById("d2");

// var tmp = d1.removeChild(d1.firstChild);

// d2.insertBefore(tmp, null);
// d2.insertBefore(d2.firstChild.cloneNode(), d2.lastChild)
// d2.insertBefore(d2.lastChild.cloneNode(true), d2.lastChild)

var u1 = document.getElementById("u1");

// the right suppose   "↵    "   childElementCount is different with childNodes.length
console.log("u1.childNodes.length: " + u1.childNodes.length);

function outputAttributes(element) {
  var pairs = new Array(),
      attrName,
      attrValue,
      i,
      len;
  for (i = 0, len = element.attributes.length; i < len; i++) {
    attrName = element.attributes[i].nodeName;
    attrValue = element.attributes[i].nodeValue;
    if(element.attributes[i].specified) {
      pairs.push(attrName + " = \"" + attrValue + "\"");
    }
  }
  return pairs.join("、");
}

console.log(outputAttributes(u1));

// var ddv = document.createElement
var ddv = document.getElementById("ddv");
var textNode = document.createTextNode("B & <strong></strong> > < \"<strong>SXS</strong>");
ddv.appendChild(textNode);
ddv.childNodes[3].splitText(26);



// 俩函数，动态加载 js、css

function loadScriptString(code) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  try {
    script.appendChild(document.createTextNode(code));
  } catch(e) {
    script.text = code;
  }
  document.body.appendChild(script);
}



function loadStyleString(css) {
  var style = document.createElement("style");
  style.type = "text/css";
  try {
    style.appendChild(document.createTextNode(css));
  } catch(e) {
    style.styleSheet.cssText = css;
  }
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(style);
}





/* ======== Main End ======== */

var stop_time = Date.now();

console.log("this script last: " + (stop_time - start_time) + "ms");

start_time = null;
stop_time = null;



