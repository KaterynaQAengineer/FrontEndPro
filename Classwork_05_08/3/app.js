// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
// Наприклад:

const array = [1, 3, 4, 6, 2, 5, 7];
function removeElement(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      array.splice(i, 1); // видаляємо 1 елемент з індекса i
      i--; // зменшуємо індекс, бо масив став коротшим
    }
  }
}
removeElement(array, 4);
document.write(array);
