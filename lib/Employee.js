// TODO: Write code to define and export the Employee class
// ES6 +
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // methods definitions
  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

const andre = new Employee("Andre", 546, "a@b.com");



// class Manager extends Employee {
//   constructor(name, id, email, officeNumber) {
//     super(name, id, email);
//     this.officeNumber = officeNumber;

//     // additional methods definitions
//     holdMeeting() {

//     }
//   }
// }

// const newEmployee = new Employee("Andre", 1, "a@b.com")
// const two = new Employee("Erik", 2, "b@b.com");

// const newManger = new Manager("Andre", 3, "a@b.com", 500);
// console.log(newManger.office)
// // ES5 syntax for defining an constructor function
// function Employee(name, id, email) {
//   this.name = name;
//   this.id = id;
//   this.email = email;
// }

// function Manager (name, id, email, officeNumber) {

// }
module.exports = Employee;
