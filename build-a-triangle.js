
// creates a line of * for a given length
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(length) {
  let triangle = '';
  for (var lineNumber = 1; lineNumber <= length; lineNumber++) {
      triangle = triangle + makeLine(lineNumber);
      }
  return triangle;    
}

// test your code by uncommenting the following line
console.log(buildTriangle(10));