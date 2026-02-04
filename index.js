class Agable {
constructor(year) {
this.year = year;
}

age() {
const currentYear = new Date().getFullYear();
return currentYear - this.year;
}
}

class Company {
constructor(name, yearEstablished) {
this.name = name;
this.agable = new Agable(yearEstablished);
}

age() {
return this.agable.age();
}
}

class Person {
constructor(firstName, lastName, birthYear) {
this.firstName = firstName;
this.lastName = lastName;
this.agable = new Agable(birthYear);
}

age() {
return this.agable.age();
}
}

class Car {
constructor(make, model, year) {
this.make = make;
this.model = model;
this.agable = new Agable(year);
}

age() {
return this.agable.age();
}
}

const company = new Company("TechCorp", 2005);
const person = new Person("Jane", "Doe", 1995);
const car = new Car("Toyota", "Camry", 2018);
