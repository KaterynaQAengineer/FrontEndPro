class Apartment {
  people = [];

  constructor(number, rooms, people) {
    this.number = number;
    this.rooms = rooms;
    this.people = people;
  }

  addPerson(person) {
    this.people.push(person);
  }

  showInfo() {
    console.log(`Flat #${this.number} has ${this.rooms} rooms`);
    if (this.people.length) {
      this.people.forEach(person => person.showInfo());
    }
  }
}