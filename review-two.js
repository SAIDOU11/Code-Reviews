// Javascript guideline suggest camelCase for functions & variables
// getDiscount
function getdiscount(code) {
  // Convert the value of to uppercase before finding a matching promo code

  // Declare promo with const to prevent reassignment
  let promo = promos.find((promo) => promo.code === code);
  //   Don't include console.log statements in production code
  console.log(promo);
  /* 
  Make this condition more concise without the !== comparison;  
  onlu check if promo is truthy and active : promo && promo.isActive
  */
  if (promo !== undefined && promo.isActive) {
    //   Don't include console.log statements in production code
    console.log(`You get a ${promo.amount}% discount!`);
    return promo.amount / 100;
  }
  return 0;
}

// Pay attention to indentation and semicolon consistency
// Javascript guideline suggest camelCase for functions & variables
// calculateFinalPrice
function calculatefinalprice(basePrice, userCode) {
  /* Similare to getDiscount, consider omitting  the else block and 
    returning basePrice if condition is false 
    */
  if (userCode) {
    const discount = getdiscount(userCode);
    const finalPrice = basePrice - basePrice * discount;
    return finalPrice;
  } else {
    return basePrice;
  }
}

// Move this array at the top of the file for better code organization
const promos = [
  { code: "TOTALLY10", amount: 10, isActive: true },
  { code: "PLENTY20", amount: 20, isActive: false },
  { code: "NIFTY50", amount: 50, isActive: true },
  { code: "WHOPPING75", amount: 75, isActive: true },
  { code: "YOLOFREE", amount: 100, isActive: false },
];

console.log(calculatefinalprice(500, "PLENTY20"));
