// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
  getOffice() {
    return this.officeNumber;
  }
}

const terry = new Manager("Terry", 666, "SweetT@hotmail.com", 77777777);

module.exports = Manager;
