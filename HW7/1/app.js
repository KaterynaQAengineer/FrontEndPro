//HW 7.1
// Написати функцію, яка приймає 1 параметр.
// Та скадае значення з тим, що передали перший раз і т. д.
// Все це із замиканнями, наприклад:

function sum() {
  let result = 0;
  return function (num) {
    result = num + result;
    return result;
  };
}
const finalResult = sum();
console.log(finalResult(4)); // 4
console.log(finalResult(6)); // 10
console.log(finalResult(10)); // 20
console.log(finalResult(7)); // 27
