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

