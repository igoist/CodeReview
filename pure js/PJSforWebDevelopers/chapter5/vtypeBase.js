var start_time = Date.now();

/* ======== Main: special reference type ======== */




var s1 = "some text";

var s2 = s1.substring(2);

console.log(s1);
console.log(s2);












/* ======== Main End ======== */

var stop_time = Date.now();

console.log("this script last: " + (stop_time - start_time) + "s");

start_time = null;
stop_time = null;
