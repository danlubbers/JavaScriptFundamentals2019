/*** 
 As a teacher, I would like to be able to be see which of my students are passing or failing, 
  so I can have a better understanding on how my students are preforming.

 *  Complete the Teacher Gradebook by using the module pattern. Use the studentGrades data that I have imported for you.

 *  1) Create the first method TeacherGradeBook.getFailingStudents which returns an array of objects of all the students that have failing the course.
 *  //TeacherGradeBook.getFailingStudents() --> [{FirstName:'Billy',lastName:'Joel',grades:[20,30,40,50]},{FirstName:'Luke',lastName:'Skywalker', grades:[0,0,0,100]}]
 *
 *  2)Create second method TeachersGradeBook.getPassingStudents() which will return an array of objects of all the students that have passed.
 *   i.e TeachersGradeBook.getPassingStudents() --> [{FirstName:'jane',lastName:'doe',grades:[100,100,100,100]},{FirstName:'James',lastName:'Bond', grades:[90,90,90,90]}]
 *
 *  3)Create third method is used to debug and will return a list of all the students.Useful for debugging purposes
 *   TeachersGradeBook.debug() --> list of all students
 *
 *
 *
 *
 */

const studentGrades = [
  {
    firstName: "Jane",
    lastName: "Doe",
    grades: [50, 60, 70, 20, 10, 20]
  },
  {
    firstName: "John",
    lastName: "Doe",
    grades: [100, 100, 100, 100, 100, 90]
  },
  {
    firstName: "Michael",
    lastName: "Jackson",
    grades: [50, 40, 20, 20, 30, 20]
  },
  {
    firstName: "Bill",
    lastName: "Clinton",
    grades: [70, 60, 70, 80, 100, 70]
  },
  {
    firstName: "Joe",
    lastName: "Miller",
    grades: [70, 60, 70, 80, 100, 70]
  },
  {
    firstName: "Billy",
    lastName: "Jean",
    grades: [70, 90, 90, 80, 100, 80]
  }
];

// const { studentGrades } = require("../12-Module-Pattern/students");

const TeacherGradeBook = (() => {
  
  const averages = studentGrades.map(student => {
    // console.log(student.firstName);
    return {
      firstName: student.firstName,
      average: Math.floor(student.grades.reduce((acc,curr)=> {
        return acc + curr;
     },0) / student.grades.length)
    };
  });
  
  console.table(averages);
  
  return {
    getFailingStudents:() => {
      return averages.filter(e => e.average < 65 && e.firstName);
    },
    
    getPassingStudents:() => {
      return averages.filter(e => e.average > 65 && e.firstName);

    }
  };
})();

console.log(TeacherGradeBook.getFailingStudents());
console.log(TeacherGradeBook.getPassingStudents());


module.exports = {
  TeacherGradeBook
};
