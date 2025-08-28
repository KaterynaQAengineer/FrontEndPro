"use strict";

//User card
employees.forEach((emp) => {
  emp.getInfo = function () {
    return `Name: ${this.firstName} ${this.lastName}, Age: ${this.age}, Country: ${this.country}`;
  };
});

// виводимо дані всіх користувачів
employees.forEach((emp) => {
  console.log(emp.getInfo());
});
