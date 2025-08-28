/*
Create reports:
  1. List of all names
    ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve']
  
  2. Unique Hobbies
    Set {'reading', 'sports', 'movies', 'coding', 'gaming', 'travel', 'music'}
  
  3. Employees per countries
    Map {
      'USA' => ['Alice', 'Charlie'],
      'Canada' => ['Bob', 'Eve'],
      'UK' => ['Diana']
    }
  
  4. Amount of employees per age
    Map {
      25 => 2,
      30 => 2,
      35 => 1,
    }
  
  5. Average age
  6. The oldest employee

  7. Search the employee by name (register insensitive)
  8. Sort users per age
  9. Rating of the most popular hobbies

  Call showCards method to show string values on the page
*/

// 1
function showListOfEmployeesNames() {
  const names = employees.map(employee => {
    return `${employee.firstName} ${employee.lastName}`;
  });

  showCards(names);
}

// 2
function showListOfUniqueHobbies() {
  const hobbiesSet = new Set();
  employees.forEach(employee => {
    employee.hobbies.forEach(hobby => {
      hobbiesSet.add(hobby);
    });
  });
  showCards([...hobbiesSet]);
}

// 3
function getEmployeesPerCountry() {
  const countriesWithEmployees = new Map();
  employees.forEach(employee => {
    if (!countriesWithEmployees.has(employee.country)) {
      countriesWithEmployees.set(
        employee.country,
        [`${employee.firstName} ${employee.lastName}`]
      );
    } else {
      const currentArr = countriesWithEmployees.get(employee.country);
      // currentArr.push(`${employee.firstName} ${employee.lastName}`);
      countriesWithEmployees.set(employee.country, [...currentArr, `${employee.firstName} ${employee.lastName}`]);
    }
  });

  return countriesWithEmployees;
}

// 4
function getEmployeesAmountPerAge() {
  return employees.reduce((myMap, employee) => {
    myMap.set(
      employee.age,
      (myMap.get(employee.age) || 0) + 1
    );
    return myMap;
    // if (myMap.has(employee.age)) {
    //   myMap.set(employee.age, myMap.get(employee.age) + 1);
    // } else {
    //   myMap.set(employee.age, 1);
    // }
  }, new Map())
}

// 5
function getEmployeesAverageAge() {
  return employees.reduce((averageAge, employee) => {
    averageAge += employee.age / employees.length;
    return averageAge;
  }, 0);
}

// 6
function getOldestEmployee() {
  return employees.reduce((oldestEmployee, employee) => {
    if (oldestEmployee.age < employee.age) {
      return employee;
    }

    return oldestEmployee;
  });
}

// 7
function getEmployeeByName(name) {
  let search = name.toLowerCase();
  search = search[0].toUpperCase() + search.slice(1);

  return employees.find(currentEmployee => {
    return `${currentEmployee.firstName} ${currentEmployee.lastName}`.includes(search);
  });
}

// 8
/*
  order: ASC (ascending) - за зростанням
  order: DESC (descending) - за спаданням
*/
function getSortedEmployees(criteria = 'age', order = 'asc') {
  const sorted = employees.sort((a, b) => a[criteria] - b[criteria]);
  if (order === 'desc') {
    return sorted.reverse();
  }

  return sorted;
}

// 9
function getHobbiesByRating() {
  const hobbies = employees.reduce((acc, employee) => {
    employee.hobbies.forEach(hobby => {
      acc[hobby] = (acc[hobby] || 0) + 1;

      // if (!acc[hobby]) {
      //   acc[hobby] = 1;
      // } else {
      //   acc[hobby] += 1;
      // }
    });

    return acc;
  }, {});
  /*
  (10) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
['reading', 358]
 ['painting', 266]
 ['gaming', 231]
 ['dancing', 193]
....
  */
  return Object.fromEntries(
    Object.entries(hobbies)
      .sort((a, b) => a[1] - b[1])
      .reverse()
      .slice(0, 3)
  );
}


// 1
// getListOfEmployeesNames();
// 2
// showListOfUniqueHobbies();
// 3
// const data = getEmployeesPerCountry();
// for(let item of data) {
//   console.log(item);
// }
// 4
// console.log(getEmployeesAmountPerAge())
// 5
// const averageAge = getEmployeesAverageAge();
// showCards([`Average age of all employees is ${Math.round(averageAge)}`]);
// 6
// const oldestEmployee = getOldestEmployee();
// showCards([`The oldest employee is ${oldestEmployee.firstName} ${oldestEmployee.lastName}. He is ${oldestEmployee.age} y.o.`])
// 7
// const name = 'Jones'; // can be got using prompt
// const myEmployee = getEmployeeByName(name)
// if (myEmployee) {
//   showCards([`${myEmployee.firstName} ${myEmployee.lastName}`]);
// } else {
//   document.write('No employees with this name found')
// }
// 8
// console.log(getSortedEmployees('age', 'desc'));
// 9
// const popularHoobies = getHobbiesByRating();
// console.log(popularHoobies);