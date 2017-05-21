var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

var i = 0
while (i < ingredients.length){
  console.log(ingredients[i]);
  i++;
}

console.log("")

for (var j = 0; j < ingredients.length; j++){
  console.log(ingredients[j]);
}

console.log("")

for (var k = ingredients.length-1; k >= 0; k--){
  console.log(ingredients[k])
}