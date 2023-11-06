class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
  }
}

class Student extends Person {
  constructor(name, age, course, marks) {
    super(name, age);
    this.course = course;
    this.marks = marks;
  }

  displayDetails() {
    super.displayDetails();
    console.log(`Course: ${this.course}`);
    console.log(`Marks: ${this.marks}`);
  }
}
// Create two Student objects and display their details
const student1 = new Student("Alice", 20, "CNS", 95);
const student2 = new Student("Bob", 22, "IP", 88);

console.log("Student 1 Details:");
student1.displayDetails();

console.log("\nStudent 2 Details:");
student2.displayDetails();
