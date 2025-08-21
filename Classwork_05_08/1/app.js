//Створити функцію, яка прибирає з рядка всі символи,
// які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])'
// поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

let sentence = prompt("Enter any sentence");
let symbolToRemove = prompt("Enter symbols to remove");
function removeSymbol(str, symbols) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (symbols.indexOf(str[i]) === -1) {
      //Перевіряємо: чи немає символа str[i] у рядку символів, які треба видалити (symbols).
      // Метод indexOf шукає символ у рядку і повертає його позицію, або -1, якщо символ не знайдений.
      result = result + str[i]; // Якщо символ немає в списку для видалення, додаємо його до рядка result.
    }
  }
  return result;
}
document.write(removeSymbol(sentence, symbolToRemove));
