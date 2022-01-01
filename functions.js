

// declares the sayHello function
function sayHello() {
  var message = "Hello!"
  return message; // returns value instead of printing it
}
console.log(sayHello());

function findRemainder(x,y,z) {
  var answer = (x * y) % z;
  return answer;
}
var remainder = findRemainder(5, 6, -7);
console.log(remainder);