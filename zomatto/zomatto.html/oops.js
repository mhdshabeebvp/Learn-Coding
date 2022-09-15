//object orianted program [OOPs concepts]

let employee = {
  name: "jhon",
  position: "accountant",
  salary: 30000,
  getSalary: function () {
    document.write("salary of" + this.name + "is" + this.salary);
  },
};
console.log(employee);
document.write(employee.salary + "<br>" + "<br>");
employee.getSalary();

//new
class employee2 {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
  getSalary() {
    document.write("salary of " + this.name + " is " + this.salary + "<br>");
  }
}
let e1 = new employee2("shabeeb ", " irshad ", 100000000 + "<br>");
e1.getSalary();
let e2 = new employee2("ishad ", " acc ", 47689834 + "<br>");
e2.getSalary();
document.write(e2.position + "<br>");
document.write(e1.salary + "<br>");
