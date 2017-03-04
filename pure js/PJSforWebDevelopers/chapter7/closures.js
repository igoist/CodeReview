var start_time = Date.now();

/* ======== Main: Closures ======== */

/* -------- Exp1 -------- */
var Switch = (function() {
  var secret = "string secret";
  return {
    get_s: function() {
      return secret;
    },
    set_s: function(new_secret) {
      secret = new_secret;
      return secret;
    }
  };
})();
// });  ---- without "()"，it's the problem
// everytime you invoke Switch(), a new Obj created
// console.log(Switch().get_s());          // string secret
// console.log(Switch().set_s("new st"));  // new st
// console.log(Switch().get_s());          // string secret

console.log(Switch.get_s());               // string secret
console.log(Switch.set_s("new st"));       // new st
console.log(Switch.get_s());               // new st


/* -------- Exp2 -------- */









/* ======== Main End ======== */

var stop_time = Date.now();

console.log("this script last: " + (stop_time - start_time) + "s");

start_time = null;
stop_time = null;
