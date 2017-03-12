var start_time = Date.now();

/* ======== Main: Object ======== */

var list = new Array();

var obj = {
  index: 0,
  title: "One",
  detail: "detail test"
};

list.push(obj);
console.log(list);



var jsonText = JSON.stringify(obj, null, 2);
// 过滤用
var jsonText2 = JSON.stringify(obj, ["title"]);

console.log(jsonText);
console.log(jsonText2);

var book = {
  "title": ["Professional", " JavaScript"],
  "authors": [
    "Nicholas C. Zakas"
  ],
  edition: 3,
  year: 2011,
  releaseDate: new Date(2017, 3, 22)
};

var jsonText3 = JSON.stringify(book, function(key, value) {
  switch(key) {
    case "authors":
      return value.join("+++++"); // join 忘记干嘛的先不管
    case "year":
      return 5000;
    case "edition":
      return undefined;
    default:
    return value;
  }
});

console.log("jsonText3: " + jsonText3);


var jsonText4 = JSON.stringify(book, null, 2);

console.log("jsonText4: " + jsonText4);
// console.log(jsonText4["title"]);  // fail

var bookCopy = JSON.parse(jsonText4,  function(key, value) {
  if(key == "releaseDate") {
    return new Date(value);
  } else {
    return value;
  }
});

console.log(bookCopy);

var objCopy = JSON.parse(jsonText);

console.log(objCopy);





/* ======== Main End ======== */

var stop_time = Date.now();

console.log("this script last: " + (stop_time - start_time) + "ms");

start_time = null;
stop_time = null;