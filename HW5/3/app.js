//3 Дано ціле число N (ввести через prompt). 
// Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N

let digit = prompt('Enter a natural number');
for (let i=1; i<=100; i++) {
    if (i *i <= digit){
document.write(`${i} `);
    }
}

