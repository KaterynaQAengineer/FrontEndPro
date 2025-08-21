// Створити масив, довжину та елементи якого задає користувач. 
// Після цього, відсортувати масив за зростанням. 
// Далі, видалити з масива елементи з 2-го по 4-й елемент.
let arr = [];
let length;
do {
 length = prompt ('Enter length of array');
}
  while (length=== null || isNaN(length) || length.trim()==='' || length <= 0);
  length = Number (length);
for (let i=0; i<length; i++)
{
  let member;
  {
  do {
    member = prompt ('Enter member of array');
  }
  while (member === null || isNaN(member) || member.trim()===''); 
    arr.push(Number(member));
  }
}
document.write('<p> Initial array: ' + arr + '</p>');
function compare (a,b) {
  if (a>b) {
    return 1;
  }
  else if (b>a) {
    return -1;
  }
  else {
    return 0;
  }
}
document.write('<p> Sorted array:' + arr.sort(compare) + '</p>');
arr.splice(1, 3);
document.write ('<p>Array with deleted elements: ' + arr + '</p>');