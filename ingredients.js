const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

// Write a for loop that prints out the contents of ingredients:

// Write any loop (while or for) that prints out the contents of ingredients backwards:

console.log("INGREDIENTS USING WHILE LOOP");

let i = 0;

while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
};

console.log("INGREDIENTS USING FOR LOOP");

for (i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
};

console.log("INGREDIENTS IN REVERSE")

for (i = ingredients.length - 1; i >= 0; i-- ) {
  console.log(ingredients[i]);
};