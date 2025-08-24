"use strict";
const uniqueProducts = new Set();

orders.forEach((order) => {
  order.items.forEach((item) => {
    uniqueProducts.add(item.name);
  });
});

console.log(uniqueProducts);
