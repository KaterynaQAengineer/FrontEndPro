//HW3.1
let drugName ='Ozempic';
console.log(drugName);  
console.log(typeof drugName); // string

let drugID = 12345678;
console.log(drugID); 
console.log(typeof drugID); // number

let price = '997.58 $';
console.log(price);
console.log(typeof price); // string
price = parseFloat(price);
console.log(price);
console.log(typeof price); // number 

let dosage = '0.25mg';
console.log(dosage);
console.log(typeof dosage); //string

let forAdults = true;
console.log(forAdults);
console.log(typeof forAdults); // boolean

let ozempicNote = null;
console.log(ozempicNote);
console.log(typeof ozempicNote); // object (value is null)

let legalClass = undefined;
console.log(legalClass); 
console.log(typeof legalClass); // undefined

let testnan = 10 * drugName;
console.log(testnan); 
console.log(typeof testnan); // NaN

const testInfinity = Infinity;
console.log(testInfinity);
console.log(typeof testInfinity); // infinity/number


let drug = {
drugName: 'Ozempic',
dosage: '0.25 mg',
price: '$ 997.58'
};
console.log(drug);
console.log(typeof drug); // object

let therapeuticCategories = ['Allergic Disorders', 'Cardiovascular Disease', 'Dermatological Disorders'];
console.log(therapeuticCategories);
console.log(typeof therapeuticCategories); // object

//HW3.2
let username = prompt ('Enter your name');
let country = prompt ('Where are you from?');
let speciality = prompt ('Which speciality do you have?');

let userInformation = `Congrats! A new account was succesfully created for ${username} from ${country}. Specialyti: ${speciality}.`;
console.log(userInformation)
