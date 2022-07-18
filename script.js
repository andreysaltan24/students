class Group {
    #students = [];
  
    getAverageMarkStudents() {
      const student = this.#students.flatMap(({ marks }) => marks);
  
      return this.gpaStudents(student);
    }
  
    addStudent(student) {
      return student instanceof Student ? this.#students.push(student) : null;
    }
  
    gpaStudents(student) {
      return student.reduce(this.reducer) / student.length;
    }
  
    reducer(a, b) {
      return a + b;
    }
    get students() {
      return this.#students;
    }
  }
  
  class Student {
    constructor(name, marks) {
      this.name = name;
      this.marks = marks;
    }
  }
  
  const group = new Group();
  
  group.addStudent(new Student('John', [10, 8]));
  group.addStudent(new Student('Alex', [10, 9]));
  group.addStudent(new Student('Bob', [6, 10,]));
  group.addStudent({}); 

console.log(group.students.length);
console.log(group.students);
console.log(group.getAverageMarkStudents());