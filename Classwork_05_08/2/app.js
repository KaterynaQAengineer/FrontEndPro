// Дано масив з елементами різних типів. 
// Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
let sentence = prompt ('Enter array');

function avarage(data) {
    let result=0;
    let count=0;
    for (let i=0; i<data.length; i++){
        let num = Number(data[i]);
        if (isNaN(num) === false){ 
            result=result+num; 
            count=count+1;
        }
    }
    if (count===0)
        return 0;
            return result/count;
}
document.write('Arithmetic mean of numerical elements='+avarage(sentence));


