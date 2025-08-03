
// Дано массив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// Знайти суму і кількість додатних (положительных) елементів.
// Знайти мінімальний (найменший) елемент масива і його індекс.
// Визначити кількість від’ємних (отрицательных) елементів масива
// Знайти кількість непарних додатних  елементів
// Знайти кількість парних додатних елементів
// Знайти суму парних додатних елементів
// Знайти суму непарних додатних елементів
// Знайти добуток всіх додатних елементів
// Змінити на 0 всі елементи масива окрім найбільшого

const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let sum = 0;
let number =0;
let min = arr[0];
let max = arr[0];
let minIndex = 0;
let maxIndex = 0;
let numberNeg=0;
let numOdd=0;
let numEven=0;
let sumEven=0;
let sumOdd=0;
let product=1;

for(let i=0; i<arr.length; i++ )
{
  if (arr[i]>0) {
    sum = sum +arr[i];
    product = product*arr[i];
    number+=1;
  }
 if (arr[i]<min) {
min = arr[i];
minIndex = i;
  }
if (arr[i]>max) {
    max = arr[i];
    maxIndex = i;
  }
  if (arr[i]<0)
  numberNeg +=1;
if (arr[i]>0 && arr[i]%2!==0) {
  sumOdd=sumOdd+arr[i];
  numOdd=numOdd+1
}
if (arr[i]>0 && arr[i]%2===0) {
  sumEven=sumEven+arr[i];
  numEven=numEven+1;
}
}
for (let i=0; i<arr.length; i++) {
  if (arr[i] !== max) {
    arr[i] = 0;
  }
}

  document.write(' a. Sum of positive numbers = ' + sum + ' Number of positive numbers = ' + number );
  document.write('<p>b. Min element of arrayy : ' + min + ' Index of element is:' + minIndex + '</p>');
  document.write('<p>c. Max element of arrayy : ' + max + ' Index of element is:' + maxIndex + '</p>');
  document.write('<p>d. Number of negative numbers = ' + numberNeg +  '</p>');
  document.write('<p>e. Number of add positive numbers = ' + numOdd +  '</p>');
  document.write('<p>f. Number of even positive numbers = ' + numEven +  '</p>');
  document.write('<p>g. Sum of even positive numbers = ' + sumEven +  '</p>');
  document.write('<p>h. Sum of odd positive numbers = ' + sumOdd +  '</p>');
  document.write('<p>i. Product of positive numbers = ' + product +  '</p>');
  document.write('<p>j. New array:  ' + arr +  '</p>');





