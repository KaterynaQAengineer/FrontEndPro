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

//HW3.3
let digit = 10369;
let lastDigit = digit % 10; //9 
// console.log(lastDigit);
digit = digit - lastDigit; // 10360
let prevDigit = (digit/10) % 10; // 6
// console.log(prevDigit);
digit =  (digit/10) - prevDigit;// 1030 
let prevDigit2 = (digit/10) % 10; // 3 
// console.log(prevDigit2); 
digit = (digit/10) - prevDigit2; //100
let prevDigit3 = (digit/10) %10; // 0 
// console.log (prevDigit3);
digit = (digit/10) - prevDigit3; // 10
let firstDigit = digit/10; //1 
// console.log (firstDigit);

console.log (`${firstDigit} ${prevDigit3} ${prevDigit2} ${prevDigit} ${lastDigit}`);
