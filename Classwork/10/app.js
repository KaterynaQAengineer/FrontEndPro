//10 Вивести на сторінку повну таблицю множення від 1 до 10 
for (let i=1; i<=10; i++) {
for (let a = 1; a<=10; a++) {
    if (a<10) {
        document.write(`${i}*${a}=${i*a}; `);
    }
    else 
    document.write(`${i}*${a}=${i*a}; <br>`);
}
}