//9 Дано натуральне число (>0). Знайти і вивести на сторінку всі його дільники
// a. Визначити кількість його парних дільників
// b. Знайти суму його парних дільників

let digit = prompt('Enter a natural number');
digit = Number(digit);
let a=0;
let sum=0;
for (let i=1; i<=digit; i++) {
    if (digit % i === 0 ) {
        document.write(`${i} `);
        if (i % 2 === 0) {
        a=a+1;
        sum=sum+i;
    }
}
}
document.write(` Кількість парних дільників: ${a}`); 
document.write(` Сума парних дільників: ${sum}`);