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

console.log(userTotalsMap);
