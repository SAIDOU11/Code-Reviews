// 1. Aim to Understand the code

/* Javascript guideline suggest using camelCase for variable & function name
ex : calculatePrice, finalPrice, */

// Pay closer attention to code indentation and semicolon cosistency

function calculate_price(basePrice) {
  // Let's not include console.log statements in production code
  console.log("Calculating final price");
  // Declare the discount variable with const to prevent reassignment
  let discount = getDiscount(basePrice);
  const final_price = basePrice - discount;
  return final_price;
}

// Declare getDiscount with const to prevent reassignement, or change this to a named function.
let getDiscount = function (basePrice) {
  // This variable is unused, please remove it.
  let currentDiscount = 0;

  // What to you think about returning the value using a ternary operatout returning
  // to make the function more consice?
  if (basePrice > 100) {
    return 20;
  } else {
    return 10;
  }
};

// For testing purpose log
console.log(`The final price is $${calculate_price(105)}`);
