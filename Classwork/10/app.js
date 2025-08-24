"use strict";
let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    web: [
      { name: "Peter", salsry: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

function sum(department) {
    if (Array.isArray(department)){
let sumSalary=0;
for(let employee of department) {
    sumSalary=sumSalary+employee.salary;
}
    
  return sumSalary;
}

else 
{
    let sumSalary=0;
    for (let internDep of Object.values(department)){
        sumSalary=sumSalary+sum(internDep);
    }
  return sumSalary;
}
}
console.log(sum(company));
