"use strict";
const contactBook = {
  contacts: [
    { name: "Maksym", phone: "0632312322", email: "maksym@gmail.com" },
    { name: "Taisiia", phone: "0633332313", email: "taisiia@gmail.com" },
  ],

  //search by name
  findContact(name) {
    return (
      this.contacts.find((contact) => contact.name === name) ||
      "Contact not found"
    );
  },

  //method for adding a new contact
  addContact(name, phone, email) {
    this.contacts.push({ name, phone, email });
    return "Contact added successfully";
  },
};

console.log(contactBook.findContact("Maksym"));
//name: "Maksym", phone: "0632312322", email: "maksym@gmail.com"

console.log(contactBook.findContact("Kate"));
// "Contact not found"

console.log(contactBook.addContact("Serhii", "0636789383", "serhii@gmail.com"));
// "Contact added successfully"

console.log(contactBook.contacts);
// contact book with the last contact added
