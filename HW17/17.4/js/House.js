class House {
  constructor(address, apartments) {
    this.address = address;
    this.apartments = apartments;
  }

  showInfo() {
    console.log(`Info about the house.`);
    console.log(` Address: ${this.address}`);
    if (this.apartments.length) {
      this.apartments.forEach(apartment => apartment.showInfo());
    }
  }
}