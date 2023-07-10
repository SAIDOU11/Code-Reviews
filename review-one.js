// Pay attention to code indentation and semicolon consistency

/* Javascript guideline suggest camelCase for variable and function names
ex : calculatePrice, finalPrice
*/

function calculate_price(basePrice) {
  // Don't include console.log statements in production code
  console.log("Calculating final price");
  //   Declare the discount with const to prevent reassignment
  let discount = getDiscount(basePrice);
  const final_price = basePrice - discount;
  return final_price;
}

// Declare getDiscount with const to prevent reassignment, or change this to a named function

let getDiscount = function (basePrice) {
  // This code is unnused, please remove it !
  let currentDiscount = 0;
  /*   What do you think about returning the value using a ternary operator
        to make the function more concise?
  */
  if (basePrice > 100) {
    return 20;
  } else {
    return 10;
  }
};

console.log(`The final price is $${calculate_price(105)}`);

// 1. Aim to Understand the code
