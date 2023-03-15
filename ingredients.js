const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;

while (i < ingredients.length){
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:
for (let i = 0; i < ingredients.length; i++){
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
let total = ingredients.length - 1;
for (let i = total; i >= 0; i--){
  console.log(ingredients[i]);
}

//While loop - reverse print of the array
let x = ingredients.length;
while (x >= 0){
  console.log(ingredients[x]);
  x--;
}