// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj == "number" || typeof obj == "boolean" || obj==null) return String(obj);
  if (typeof obj == "string")	return "\"" + obj +"\"";
  if (Array.isArray(obj)==true && obj.length==0) return "[]";
  var testForEmptyObj = function(x) {
  	var len=0;
    for (var key in x) len=len+1;
    if (len==0) return true;
    return false;
  };
  if (typeof obj=="object" && testForEmptyObj(obj)==true) return "{}";
};
