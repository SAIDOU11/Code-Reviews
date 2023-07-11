// Add more comments for better understanding, good Job 👍

// Pay closer attention to indentation and semicolon consistency

/* Javascript guidelines suggest using camelCasel for variable and function
 getDiscount.
 */
function getdiscount(code) {
  //  You should use code in uppercase to avoid any confusion in code object
  let promo = promos.find((promo) => promo.code === code);
  // Avoid console.log statement in produduction code
  console.log(promo);
  /* The condition here could be more concise, without ==!
  only check if promo is truthy and active: (promo && promo.isActive)  */
  if (promo !== undefined && promo.isActive) {
    // Consider leaving console.log statements out of production code
    console.log(`You get a ${promo.amount}% discount!`);
    return promo.amount / 100;
  }
  return 0;
}

// Javascript guidelines suggest using camelCasel for variable and function
// calculateFinalPrice

function calculatefinalprice(basePrice, userCode) {
  /* Similar to getDiscount, consider omitting the else block and 
  returning basePrice if the condition is false. */
  if (userCode) {
    const discount = getdiscount(userCode);
    const finalPrice = basePrice - basePrice * discount;
    return finalPrice;
  } else {
    return basePrice;
  }
}

// You should move this array on top of the file page for better code oraganization
const promos = [
  { code: "TOTALLY10", amount: 10, isActive: true },
  { code: "PLENTY20", amount: 20, isActive: false },
  { code: "NIFTY50", amount: 50, isActive: true },
  { code: "WHOPPING75", amount: 75, isActive: true },
  { code: "YOLOFREE", amount: 100, isActive: false },
];

// You code is clean and understable 👍
console.log(calculatefinalprice(500, "WHOPPING75"));
