const sayHello = function(name) {
  console.log('Hello, ' + name);
}


sayHello('Peabody');
sayHello('Rocky');
sayHello('Quazimodo');

//console.log vs ...
const sayHelloToConsole = function (name) {
  console.log('Hello, ' + name);
}
sayHelloToConsole('Juniper');

//...return

const returnSayHello = function (name) {
  return 'Hello, ' + name;
}
const greeting = returnSayHello('Rosalyn');

console.log(greeting);





