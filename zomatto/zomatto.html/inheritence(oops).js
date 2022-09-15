//object oriented programming.(oops)
//inheritance
class employee {
  constructor(name, postition, salary) {
    this.name = name;
    this.postition = postition;
    this.salary = salary;
  }
  getSalary() {
    document.write(
      "salary of " +
        this.name +
        " is " +
        this.salary +
        " and also the position is" +
        this.postition +"<br>"
    );
  }
}

class manager extends employee {}
let m1 = new manager("smith", "  hr ", 50000 );
let m2 = new manager("shabeeb","student",908898098);

m1.getSalary();
m2.getSalary();