var myArray = ['chocolate', 'vanilla', 'cinnamon', 'sugar'];


var newArray = myArray.map(function(elem) {
  elem = elem + ' love';
  return elem;

})
for (let i = 0; i < newArray.length; i++) {
console.log(newArray[i]);

}



