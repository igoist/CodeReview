var start_time = Date.now();

/* ======== Main: Object ======== */

var leftPos = (typeof window.screenLeft == "number") ? window.screenLeft : window.screenX;
var topPos = (typeof window.screenTop == "number") ? window.screenTop : window.screenY;



// p207 8.2.1
function getQueryStringArgs() {

  var qs = (location.search.length > 0 ? location.search.substring(1) : "");
  var args = {};
  var items = qs.length ? qs.split("&") : [];
  var item = null;
  var name = null;
  var value = null;
  var i = 0;
  var len = items.length;

  for(i = 0; i < len; i++) {
    item = items[i].split("=");
    name = decodeURIComponent(item[0]);
    value = decodeURIComponent(item[1]);
    if(name.length) {
      args[name] = value;
    }
  }
  console.log(args);
}

getQueryStringArgs();

// location.assign("./t.htm");


/* ======== Main End ======== */

var stop_time = Date.now();

console.log("this script last: " + (stop_time - start_time) + "ms");

start_time = null;
stop_time = null;
