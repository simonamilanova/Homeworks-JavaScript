//Homework - Class05
//Exercise 1

//All students with an average grade higher than 3
let findAvgGrade = students.filter((student) => student.averageGrade > 3);
//console.log(findAvgGrade);

// students.filter((student) => student.averageGrade > 3)
//  .forEach((student) => {console.log(`Student: ${student.firstName} has an average grade of: ${student.averageGrade}`)})


//All female student names with an average grade of 5
// students
//     .filter((student) => student.gender === "Female")
//     .filter((student) => student.averageGrade === 5)
//     .forEach((student) => {console.log(`${student.firstName} ${student.lastName}, grade: ${student.averageGrade}`)})


let femaleStudentAvgGrade = students
    .filter((student) => student.gender === "Female")
    .filter((student) => student.averageGrade === 5)
// console.log(femaleStudentAvgGrade);



//All male students full names who live in Skopje and are over 18 years old
//students
    // .filter((student) => student.gender === "Male" && student.city === "Skopje" && student.age > 18)
    // .forEach((student) => {console.log(`${student.firstName} ${student.lastName}`)})



//The average grades of all female students over the age of 24
let printResult = students
    .filter((student) => student.gender === "Female" && student.age > 24)
    .map((student) => student.averageGrade)
    .reduce((sum, grade) => sum += grade, 0)
// console.log(printResult);



//All male students with a name starting with B and average grade over 2
let findNames = students   
    .filter((student) => student.gender === "Male" && student.averageGrade > 2)
    .filter((student) => student.firstName.startsWith("B", 0))
//console.log(findNames);

