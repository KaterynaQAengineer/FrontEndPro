"use strict";

const transactionTotal = orders.map((order) => {
  let total = 0;
  for (let item of order.items) {
    total += item.price;
  }
  return {
    user: order.user,
    total: total,
  };
});

// console.log(transactionTotal);

const userTotalsMap = new Map();

transactionTotal.forEach((tr) => {
  if (userTotalsMap.has(tr.user)) {
    userTotalsMap.set(tr.user, userTotalsMap.get(tr.user) + tr.total);
  } else {
    userTotalsMap.set(tr.user, tr.total);
  }
});

// console.log(userTotalsMap);

const userTotalsArray = Array.from(userTotalsMap.entries());

const topUser = userTotalsArray.reduce((max, current) => {
  return current[1] > max[1] ? current : max;
});

console.log(`${topUser[0]} витратив більше за всіх: $${topUser[1]}`);
