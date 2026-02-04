class Agable {
constructor(year) {
this.year = year;
}

age() {
return new Date().getFullYear() - this.year;
    }
}

class Company extends Agable {
constructor(name, taxId, yearEstablished, taxRate) {
super(yearEstablished)
    this.name = name;
    this.id = taxId;
this.taxRate = taxRate;
    }
}
class Person extends Agable{
constructor(name, ssn, birthYear, taxRate) {
super(birthYear)
this.name = name;
this.id = ssn;
this.taxRate = taxRate;
    }   
}

class Car extends Agable{
constructor(model, vin, year) {
super(year)
this.name = model;
this.id = vin;
    }
}

