"use strict";

function Student(firstName, lastName, birthYear, grades = []) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.grades = grades;
  this.attendance = new Array(25);
  this.currentLesson = 0;
  this.attendanceClosed = false;

  this.getAge = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  };

  this.getAverageGrade = function () {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
  };

  this.present = function () {
    if (this.currentLesson < 25) {
      this.attendance[this.currentLesson] = true;
      this.currentLesson++;
    } else if (!this.attendanceClosed) {
      console.log("Всі 25 занять відмічені!");
      this.attendanceClosed = true;
    }
  };

  this.absent = function () {
    if (this.currentLesson < 25) {
      this.attendance[this.currentLesson] = false;
      this.currentLesson++;
    } else if (!this.attendanceClosed) {
      console.log("Всі 25 занять відмічені!");
      this.attendanceClosed = true;
    }
  };

  this.getAverageAttendance = function () {
    const filled = this.attendance.filter((val) => val !== undefined);
    if (filled.length === 0) return 0;
    const presentCount = filled.filter((val) => val === true).length;
    return presentCount / filled.length;
  };

  this.summary = function () {
    const avgGrade = this.getAverageGrade();
    const avgAttendance = this.getAverageAttendance();

    if (avgGrade > 90 && avgAttendance > 0.9) {
      console.log("Молодець!");
    } else if (avgGrade > 90 || avgAttendance > 0.9) {
      console.log("Добре, але можна краще");
    } else {
      console.log("Редиска!");
    }
  };
}

// examples
const student1 = new Student("Максим", "Азаренко", 2017, [100, 95, 92, 95]);
const student2 = new Student("Таїсія", "Азаренко", 2019, [100, 100, 80, 98]);

console.log(
  student1.firstName,
  "вік:",
  student1.getAge(),
  "середній бал:",
  student1.getAverageGrade().toFixed(2)
);
student1.present();
student1.present();
student1.absent();
student1.absent();
console.log("Відвідуваність студента 1:", student1.attendance);
student1.summary();

console.log(
  student2.firstName,
  "вік:",
  student2.getAge(),
  "середній бал:",
  student2.getAverageGrade().toFixed(2)
);
for (let i = 0; i < 26; i++) {
  student2.present();
}
console.log("Відвідуваність студента 2:", student2.attendance);
student2.summary();
