/*

1. class House
2. class Apartment
3. class Person
4. create dynamic data

*/

const regEx = {
  houseAddress: /\w{1}/,
  rooms: /\d/,
};


const getAndValidateValue = (message, regExKey) => {
  let value = '';
  do {
    value = prompt(message);
  } while(!value || (regExKey && !value.match(regEx[regExKey])));

  return value;
}

const createHouse = () => {
  const address = getAndValidateValue('Enter address', 'houseAddress');
  const apartmentsAmount = getAndValidateValue('Enter apartments amount');
  const apartments = [];

  for (let j = 0; j < apartmentsAmount; j++) {
    const myApartment = createApartment(j);
    apartments.push(myApartment);
  }

  return new House(address, apartments);
}

const createApartment = (apartmentIndex) => {
  const number = getAndValidateValue(`Enter number of apartment with index ${apartmentIndex}`);
  const roomsAmount = getAndValidateValue(`Enter number of rooms in apartment with index ${apartmentIndex}`);

  const peopleAmount = getAndValidateValue(`Enter amount of people for apartment with index ${apartmentIndex}`);
  const people = [];

  for (let p = 0; p < peopleAmount; p++) {
    people.push(createPerson(p, apartmentIndex));
  }

  const myApartment = new Apartment(number, roomsAmount, people);
  return myApartment;
}

const createPerson = (personIndex, apartmentIndex) => {
  const fullname = getAndValidateValue(`Enter the fullname of person(index ${personIndex}) for apartment (index ${apartmentIndex})`);
  const age = getAndValidateValue(`Enter the age of person(index ${personIndex}) for apartment (index ${apartmentIndex})`);
  return new Person(fullname, age);
}

const housesAmount = getAndValidateValue('Enter amount of houses you wanna create');
const houses = [];

for (let i = 0; i < housesAmount; i++) {
  houses.push(createHouse());
}

houses.forEach(house => house.showInfo());