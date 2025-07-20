//Task 1: Create the Order System

let orders = [
  ["Latte", "Tea", "Espresso"],     // drinks
  ["Croissant", "Muffin", "Bagel"]  // pastries
];

//Task 2: Log the number of drinks and pastries using .length

console.log("Number of drinks:", orders[0].length);     // Output: 3
console.log("Number of pastries:", orders[1].length);   // Output: 3

//Task 3: Access specific orders using bracket notation

console.log("First drink:", orders[0][0]);              // Latte
console.log("Last pastry:", orders[1][2]);              // Bagel
console.log("Second drink:", orders[0][1]);             // Tea

//Task 4: Access Orders Dynamically with Variables

let row = 0;    // drinks row
let item = 2;   // 3rd item in drinks
console.log("Accessed dynamically:", orders[row][item]); // Espresso

//Task 5: Write a loop to log all items in the drinks category dynamically
for (let i = 0; i < orders[0].length; i++) {
  console.log("Drink:", orders[0][i]);
}

//Task 6: Add a new order (flat white) and track the updated length
orders[0].push("Flat White");  // Add new drink to the drinks category
console.log("Updated number of drinks:", orders[0].length); // Should be 4

//Then use two variables to access a specific drink dynamically:
let drinkRow = 0;
let drinkIndex = orders[0].length - 1;  // Last added item
console.log("New drink accessed dynamically:", orders[drinkRow][drinkIndex]); // Flat White