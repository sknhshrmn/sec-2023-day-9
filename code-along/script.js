console.log("start");

// mango lassi
// blend mango + yoghurt + lemon zest + condensed milk
// process = blend

let ingredient1 = "mango";
let ingredient2 = "yoghurt";
let ingredient3 = "lemon zest";
let ingredient4 = "condensed milk";

// let mangoLassiRecipe =
//   "I made this drink with " +
//   ingredient1 +
//   " " +
//   ingredient2 +
//   " " +
//   ingredient3 +
//   " " +
//   ingredient4 +
//   ".";

// 1. template string
let mangoLassiRecipe = `I made this drink with ${ingredient1}, ${ingredient2}, ${ingredient3}, and ${ingredient4}.`;

// fresh orange
// ingredient = orange + sugar + water + ice
// process = blend

let ingredient5 = "orange";
let ingredient6 = "sugar";
let ingredient7 = "water";
let ingredient8 = "ice";
let orangeJuiceRecipe = `I made this drink with ${ingredient5}, ${ingredient6}, ${ingredient7}, and ${ingredient8}.`;

// console.log(mangoLassiRecipe);
// console.log(orangeJuiceRecipe);

// // 2. function declaration
function blendAJuice(arg1, arg2, arg3, arg4) {
  let statement = `I made this drink with ${arg1}, ${arg2}, ${arg3}, ${arg4}`;
  //   outcomne return a value
  return statement;
}

// function blendAJuice(arg1, arg2, arg3, arg4) {
//   console.log(arg1, 1);
//   console.log(arg2, 2);
//   console.log(arg3, 3);
//   console.log(arg4, 4);
//   console.log("---------");
//   // console.log("this is a blend function");
// }

// 3. function will not execute unless we invoke them
// invoke a function / run / call a function
blendAJuice();

// 4. pass an argument inside a function
// blendAJuice("mango");
// blendAJuice("orange");

// pass all argument inside a function
// blendAJuice("mango", "yoghurt", "lemon zest", "condenssed milk");
// blendAJuice("orange", "sugar", "water", "ice");

// modify blendAJuice function and log complete recipe statement
// example = I made this drink with mango, yoghurt, lemon zest, condensed milk

// 5. Every function can return a value
let mangoLassi = blendAJuice(
  ingredient5,
  ingredient6,
  ingredient7,
  ingredient8
);
let orangeJuice = blendAJuice(
  ingredient1,
  ingredient2,
  ingredient3,
  ingredient4
);

console.log(mangoLassi);
console.log(orangeJuice);
