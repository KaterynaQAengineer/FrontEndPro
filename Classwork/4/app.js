//4 Знайти суму всіх цілих чисел від 1 до 15

let a=0;
for (let i = 1; i<=15; i++) {
   a=i+a; 
}
document.write(`${a}`);