// JavaScript does not have a concept of class like other programming languages such as Java and C#. In ES5, you can use a constructor function and prototype inheritance to create a “class”.

// For example, to create a Person class that has three properties ssn, first name, and last name, you use the following constructor function:

// function Person(ssn, firstName, lastName) {
//   this.ssn = ssn;
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// let person = new Person("123-123-123", "Ian", "Miles");
// console.log(person.getFullName());

class Person {
  ssn;
  firstName;
  lastName;

  constructor(ssn, firstName, lastName) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.ssn} ${this.lastName}`;
  }
}

let person = new Person("171-28-1234", "John", "Ian");
console.log(person.getFullName());
