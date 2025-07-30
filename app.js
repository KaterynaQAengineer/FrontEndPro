// //HW3.1
// let drugName ='Ozempic';
// console.log(drugName);  
// console.log(typeof drugName); // string

// let drugID = 12345678;
// console.log(drugID); 
// console.log(typeof drugID); // number

// let price = '997.58 $';
// console.log(price);
// console.log(typeof price); // string
// price = parseFloat(price);
// console.log(price);
// console.log(typeof price); // number 

// let dosage = '0.25mg';
// console.log(dosage);
// console.log(typeof dosage); //string

// let forAdults = true;
// console.log(forAdults);
// console.log(typeof forAdults); // boolean

// let ozempicNote = null;
// console.log(ozempicNote);
// console.log(typeof ozempicNote); // object (value is null)

// let legalClass = undefined;
// console.log(legalClass); 
// console.log(typeof legalClass); // undefined

// let testnan = 10 * drugName;
// console.log(testnan); 
// console.log(typeof testnan); // NaN

// const testInfinity = Infinity;
// console.log(testInfinity);
// console.log(typeof testInfinity); // infinity/number


// let drug = {
// drugName: 'Ozempic',
// dosage: '0.25 mg',
// price: '$ 997.58'
// };
// console.log(drug);
// console.log(typeof drug); // object

// let therapeuticCategories = ['Allergic Disorders', 'Cardiovascular Disease', 'Dermatological Disorders'];
// console.log(therapeuticCategories);
// console.log(typeof therapeuticCategories); // object

// //HW3.2
// let username = prompt ('Enter your name');
// let country = prompt ('Where are you from?');
// let speciality = prompt ('Which speciality do you have?');
// let graduate = prompt ('Enter graduation year')

// let userInformation = `Congrats! A new account was succesfully created for ${username} from ${country}. Specialyti: ${speciality}. Graduation year: ${graduate} `;
// console.log(userInformation)

// //HW3.3
// let digit = 10369;
// let lastDigit = digit % 10; //9 
// // console.log(lastDigit);
// digit = digit - lastDigit; // 10360
// let prevDigit = (digit/10) % 10; // 6
// // console.log(prevDigit);
// digit =  (digit/10) - prevDigit;// 1030 
// let prevDigit2 = (digit/10) % 10; // 3 
// // console.log(prevDigit2); 
// digit = (digit/10) - prevDigit2; //100
// let prevDigit3 = (digit/10) %10; // 0 
// // console.log (prevDigit3);
// digit = (digit/10) - prevDigit3; // 10
// let firstDigit = digit/10; //1 
// // console.log (firstDigit);

// console.log (`${firstDigit} ${prevDigit3} ${prevDigit2} ${prevDigit} ${lastDigit}`);




// Class Work
// //1
// let firstNumber = prompt ('Enter the first number');
// let secondNumber = prompt ('Enter the second number');
// if (firstNumber > secondNumber) {
//     console.log('The First number more than second');
// }
// else if (firstNumber===secondNumber) {
//     console.log('Numbers are equal');
// }
// else {
//     console.log('The second number more than first');
// }


// //2
// let distanceKm = prompt ('Enter the distance in km');
// let distanceFt = prompt ('Enter the distance in ft');

// distanceKm = distanceKm*1000;
// distanceFt = distanceFt*305;
// if (distanceKm > distanceFt) {
//     console.log ('The first distance in km is greater than distance in ft');
// }
// else {
//     console.log ('The second distance in ft is greater than distance in km');
// }


// //3
// let a = prompt ('Enter the digit');
// let b = prompt ('Enter the digit');

// if (a%b===0){
// console.log ('b is divisor of a');
// }
// else {
//     console.log ('b is not divisor of a');
// }

// if (b%a===0){
//     console.log ('a is divisor of b');
// }
// else {console.log ('a is not divisor of b');
// }


// //4
// let digit = prompt('Enter the digit');
// let lastDigit = digit % 10; 
// console.log(lastDigit);
// if (lastDigit%2 == 0)
// {
//     console.log('digit is even');
// }
// else 
// {
//     console.log('digit is not even');
// }



// //5
// let digit = prompt('Enter two-digit number');
// let lastDigit = digit % 10; 
// digit = digit - lastDigit;
// let firstdigit = digit/10;
// if (firstdigit>lastDigit)  {
//     console.log('The first number is greater than the last');
// }
// else if (lastDigit>firstdigit) {
//     console.log('The last number is greater than the first');
// }
// if (firstdigit === lastDigit) {
//     console.log ('The numbers are the same');
// }



// //6
// let digit = prompt('Enter tree-digit number');
// let lastDigit = digit % 10; 
// console.log(lastDigit);
// digit = digit - lastDigit; 
// let prevtDigit = (digit/10) %10;  
// console.log(prevtDigit);
// let firstDigit = ((digit/10) - prevtDigit)/10; 
// console.log(firstDigit);
// let amount = lastDigit + prevtDigit + firstDigit;
// if (amount % 2 === 0) {
//     console.log ('The sum of the digits is even ');
// }
// if (amount %5 === 0) {
//     console.log('The sum of the digits is multiple of 5');
// }
// let product = lastDigit * prevtDigit * firstDigit;
// if (product > 100) {
//     console.log('Product of the digits greater than 100');
// }
// if (firstDigit === prevtDigit  && firstDigit === lastDigit && prevtDigit === lastDigit)  {
//     console.log('All the digits are the same');
// }
// else if ((firstDigit === prevtDigit && firstDigit !== lastDigit) || 
// (firstDigit === lastDigit && firstDigit !== prevtDigit) || 
// (prevtDigit === lastDigit && prevtDigit !== firstDigit))  {
// console.log('Among the numbers there are the same');
// }
// else {
//     console.log('All the digits are different');
// }


//7
// let digit = prompt('Enter six-digit number');
// let lastDigit = digit % 10; 
// // console.log(lastDigit);
// digit = digit-lastDigit; 
// let prevDigit = (digit/10) % 10; 
// // console.log(prevDigit);
// digit =  (digit/10) - prevDigit; 
// let prevDigit2 = (digit/10) % 10; 
// // console.log(prevDigit2); 
// digit = (digit/10) - prevDigit2; 
// let prevDigit3 = (digit/10) %10;  
// // console.log (prevDigit3);
// digit = (digit/10) - prevDigit3; 
// let prevDigit4 = (digit/10) % 10; 
// // console.log (prevDigit4);
// digit = (digit/10) - prevDigit4; 
// let firstDigit = digit/10; 
// // console.log (firstDigit);
// if (firstDigit === lastDigit && prevDigit === prevDigit4 && prevDigit2 === prevDigit3) {
//     console.log('The six-digit is mirror number');
// }
// else {
//     console.log('The six-digit is not mirror number');
// }


//HW4.1
// let name = prompt ('Enter user name');
// alert (`Hello, ${name}! How are you?`);


// //HW4.2
// let digit = prompt('Enter tree-digit number');
// let lastDigit = digit % 10; 
// console.log(lastDigit);
// digit = digit - lastDigit; 
// let prevtDigit = (digit/10) %10;  
// console.log(prevtDigit);
// let firstDigit = ((digit/10) - prevtDigit)/10; 
// console.log(firstDigit);
// if ((firstDigit === prevtDigit && firstDigit !== lastDigit) || 
// (firstDigit === lastDigit && firstDigit !== prevtDigit) || 
// (prevtDigit === lastDigit && prevtDigit !== firstDigit))  {
// console.log('Among the numbers there are the same');
// }
// else if (firstDigit === prevtDigit  && firstDigit === lastDigit && prevtDigit === lastDigit)  {
//     console.log('All the digits are the same');
// }
// else {
//     console.log('All the digits are different');
// }



// //HW4.3
// let year = prompt ('Enter your year of birth');
// if (year === null ) {
//     alert (`Too bad you didn't want to provide the information.`);
// }
// let city = prompt ('Enter the city where you live');
// if (city === null ) {
//     alert (`Too bad you didn't want to provide the information.`);
// }
// let sport = prompt ('Enter favorite sport');
// if (sport === null ) {
//     alert (`Too bad you didn't want to provide the information.`);
// }
// let age;
// if (year === null) {
// age = 'Year is not stecified';
// }
// else {
//     age = 2025 - year;
// }
// if (city === 'Kyiv')  {
//     let country = 'Ukraine';
//     alert (`Your age: ${age} You live in the capital of ${country}`);
// }
// else if (city === 'Washington')  {
//     let country = 'the United States';
//     alert (`Your age: ${age} You live in the capital of ${country}`);
// }
// else if (city === 'London')  {
//     let country = 'the United Kingdom';
//     alert (`Your age: ${age} You live in the capital of ${country}`);
// }
// else if (city === null)  {
//     alert (`Your age: ${age} City is not specified`);
// }
// else {
//     alert (`Your age: ${age} You live in ${city}`);
// }

// if (sport==='hockey') {
//     let champion = 'Connor McDavid';
//     alert (`Cool! Do you want to be like ${champion}?`);
// }
// if (sport==='football') {
//     let champion = 'David Beckham';
//     alert (`Cool! Do you want to be like ${champion}?`);
// }
// if (sport==='dance') {
//     let champion = 'Joanne Clifton';
//     alert (`Cool! Do you want to be like ${champion}?`);
// }
// if (sport===null) {
//     alert (`Sport is not specified`);
// }


//4.4
// let numOrStr = prompt('input number or string');
// console.log(numOrStr)


// if (numOrStr === null) {
//     console.log('ви скасували')
// } else if (numOrStr.trim() === '') {
//     console.log('Empty String');
// } else if (isNaN(+numOrStr)) {
//     console.log(' number is Ba_NaN')
// } else {
//     console.log('OK!')
// }


// let numOrStr = prompt('input number or string');
// console.log(numOrStr)
// switch (true)
// {
//     case numOrStr === null: console.log('ви скасували');
//     break;
//     case  numOrStr.trim() === '': console.log('Empty String');
//     break; 
//     case isNaN(+numOrStr): console.log(' number is Ba_NaN');
//     break;
//     default: console.log('OK!');
// }



// Class work 28.07.2025
//1

// for (let i = 10; i<=20; i++ ) {
//   if (i<20){
//     document.write(`${i}, `);
//   }
//   else 
//   document.write(`${i}`);
//     }


 //2
    
// for (let i = 10; i<=20; i++ ) {
//     let b = i*i;
//     if (i<20) {
//         document.write(`${b}, `);
//     }
//    else 
//    document.write(`${b}`);
//     }

// //3
// let a=7;
// for (let i = 1; i<=10; i++) {
//     if (i<10) {
//         document.write(`${i}*${a}=${i*a}; `);
//     }
//     else 
//     document.write(`${i}*${a}=${i*a}; `);
// }


//4
// let a=0;
// for (let i = 1; i<=15; i++) {
//    a=i+a; 
// }
// document.write(`${a}`);


//5
// let a =1n;
// for (let i=15n; i<=35n; i++) {
//     a=a*i;
// }
// document.write(`${a}`);


//6
// let a=0;
// for (let i=1; i<=500; i++) {
//     if (i<500){
//         a=i+a;
//     }
// else 
// document.write(`${a=(i+a)/i}`);
// }

//7
// let a=0;
// for (let i=30; i<=80; i++){
// if (i % 2 === 0) {
//     a=a+i;
// }
// }
// document.write (`${a}`);


//8
// for (let i=100; i<=200; i++) {
//     if (i % 3 === 0) {
//             document.write (`${i}, `);
//     }
// }


//9
// let digit = prompt('Enter a natural number');
// digit = Number(digit);
// let a=0;
// let sum=0;
// for (let i=1; i<=digit; i++) {
//     if (digit % i === 0 ) {
//         document.write(`${i} `);
//         if (i % 2 === 0) {
//         a=a+1;
//         sum=sum+i;
//     }
// }
// }
// document.write(` Кількість парних дільників: ${a}`); 
// document.write(` Сума парних дільників: ${sum}`);


//10
// for (let a=1; a<=10; a++) {
// for (let i = 1; i<=10; i++) {
//     if (i<10) {
//         document.write(`${i}*${a}=${i*a}; `);
//     }
//     else 
//     document.write(`${i}*${a}=${i*a}; <br>`);
// }
// }


// //HW 1 
// let a='';
// for(let i=20; i<=30; i+=0.5) {
//   a=a+i+' ';  
// }
// console.log(a);

//2
// let usd=26;
// for (let i=10; i<=100; i+=10) {
//     let a=i*usd;
//     console.log(`${i}USD=${a}`);    
// }


//3
// let digit = prompt('Enter a natural number');
// for (let i=1; i<=100; i++) {
//     if (i *i <= digit){
// document.write(`${i} `);
//     }
// }


//4 
// let digit = prompt('Enter a natural number');
// digit=Number(digit);
// let a=true;
// if (digit>1) {
//     for (let i=2; i<digit; i++) {
//         if (digit%i ===0) {
//             a=false;
//             break;
//         }
//     }
//     if (a){
//         document.write(`${digit} is a prime number.`);
//     }
//         else {
//             document.write(`${digit} is not a prime number.`);
//         }
// }         
// else {
//     document.write(`${digit} is not a prime number.`);  
// }