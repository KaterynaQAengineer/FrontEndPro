//4  Дано ціле число (ввести через 'prompt'). З'ясувати, чи просто воно 
// (простим називається число, більше 1, що не має інших дільників, крім 1 і себе).

let digit = prompt('Enter a natural number');
digit=Number(digit);
let a=true;
if (digit>1) {
    for (let i=2; i<digit; i++) {
        if (digit % i === 0) {
            a=false;
            break;
        }
    }
    if (a){
        document.write(`${digit} is a prime number.`);
    }
        else {
            document.write(`${digit} is not a prime number.`);
        }
}         
else {
    document.write(`${digit} is not a prime number.`);  
}