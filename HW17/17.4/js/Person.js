class Person {
  constructor(fullname, age) {
    this.fullname = fullname;
    this.age = age;
  }
  showInfo() {
    console.log(`Person: ${this.fullname} is ${this.age} y.o.`);
  }
}