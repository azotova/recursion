// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var result=[];
  var getElementsInElement = function(node) {
    if (_.contains(node.classList, className)) result.push(node);
    if (node.childNodes.length==0) return;
    _.each(node.childNodes, getElementsInElement)
    };
  getElementsInElement(document.body);
  return result;
};