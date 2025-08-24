"use strict";

const transactionTotal = orders.map((order) => ({
  user: order.user,
  total: order.items.reduce((sum, item) => {
    sum = sum + item.price;
    return sum;
  }, 0),
}));
// console.log(transactionTotal);
const userTotals = transactionTotal.reduce((users, curr) => {
  if (users[curr.user]) {
    users[curr.user] = users[curr.user] + curr.total;
  } else {
    users[curr.user] = curr.total;
  }

  return users;
}, {});
console.log(userTotals);
