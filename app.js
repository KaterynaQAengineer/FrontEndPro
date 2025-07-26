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
// if ((firstDigit === prevtDigit && firstDigit !== lastDigit) || 
// (firstDigit === lastDigit && firstDigit !== prevtDigit) || 
// (prevtDigit === lastDigit && prevtDigit !== firstDigit))  {
// console.log('Among the numbers there are the same');
// }
// else {
//     console.log('All the digits are different');
// }


//7
let digit = prompt('Enter six-digit number');
let lastDigit = digit % 10; 
// console.log(lastDigit);
digit = digit-lastDigit; 
let prevDigit = (digit/10) % 10; 
// console.log(prevDigit);
digit =  (digit/10) - prevDigit; 
let prevDigit2 = (digit/10) % 10; 
// console.log(prevDigit2); 
digit = (digit/10) - prevDigit2; 
let prevDigit3 = (digit/10) %10;  
// console.log (prevDigit3);
digit = (digit/10) - prevDigit3; 
let prevDigit4 = (digit/10) % 10; 
// console.log (prevDigit4);
digit = (digit/10) - prevDigit4; 
let firstDigit = digit/10; 
// console.log (firstDigit);
if (firstDigit === lastDigit && prevDigit === prevDigit4 && prevDigit2 === prevDigit3) {
    console.log('The six-digit is mirror number');
}
else {
    console.log('The six-digit is not mirror number');
}