//3 Вивести таблицю множення на 7 в форматі (1*7 = 7; 2*7 = 14…)

let a=7;
for (let i = 1; i<=10; i++) {
    if (i<10) {
        document.write(`${i}*${a}=${i*a}; `);
    }
    else 
    document.write(`${i}*${a}=${i*a}; `);
}