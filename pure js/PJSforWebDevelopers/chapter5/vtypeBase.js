var start_time = Date.now();

/* ======== Main: special reference type ======== */




// var s1 = "some text";

// var s2 = s1.substring(2);

// console.log(typeof s1);
// console.log(typeof s2);

// console.log(s1);
// console.log(s2);

// var s3 = new String("again");

// console.log(typeof s3);

// console.log(s3);


/* -------- string.replace() --------*/


var text = "cat, bat, sat, fat";
// var result = text.replace("at", "ond");
// console.log(result);

// var result = text.replace(/at/g, "ond");
// console.log(result);


// page: 127 -- $$、$&、$'、$`、$n、$nn
var result = text.replace(/(.at)/g, "word($1)");
console.log(result);

function htmlEscape(text) {
  return text.replace(/[<>"&]/g, function(match, pos, originalText) {
    console.log("$1: " + (match) + ", $2: " + (pos));
    switch(match) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "\"":
        return "&quot;";
    }
  });
}

var text = "<p class=\"greeting\">Hello world!</p>";
console.log(htmlEscape(text));

var text = "red, blue] green, yellow";
console.log(text.split(","));
console.log(text.split(",", 2));
console.log(text.split(/[^\,]+/));


/* ======== Main End ======== */

var stop_time = Date.now();

console.log("this script last: " + (stop_time - start_time) + "ms");

start_time = null;
stop_time = null;
