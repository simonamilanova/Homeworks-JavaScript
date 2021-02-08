//Homework 1 - Student constructor function
function Student(firstName, lastName, birthYear, academy, grades){
    this.fName = firstName;
    this.lName = lastName;
    this.bYear = birthYear;
    this.academy = academy;
    this.grades = grades;

    this.getAge = function(){
        let currentYear = new Date().getFullYear();
        return `The student ${this.fName} is ${currentYear - this.bYear} years old.`;
    }

    this.getInfo = function(){
        return `This is student ${this.fName} ${this.lName} from the academy ${academy}!`;
    }

    this.getGradesAverage = function(){
        return `The average grade of the student is ${(this.grades[0] + this.grades[1] + this.grades[2]) / 3}.`
    }

}

let studentArray = [];

let student = new Student("Simona", "Milanova", 1997, "SEDC", [5, 4, 5]);
console.log(student.getInfo(), student.getAge(), student.getGradesAverage());

let studentOne = new Student("Simon", "Milanov", 1999, "SEDC", [3, 4, 5]);
console.log(studentOne.getInfo(), studentOne.getAge(), studentOne.getGradesAverage());

let studentTwo = new Student("Marija", "Gucinovska", 1998, "SEDC", [5, 4, 2]);
console.log(studentTwo.getInfo(), studentTwo.getAge(), studentTwo.getGradesAverage());

studentArray.push(student.fName);
studentArray.push(studentOne.fName);
studentArray.push(studentTwo.fName);

console.log(studentArray);


//Homework - student sign up
// function Students(firstName, lastName, birthYear, academy){
//     this.fName = firstName;
//     this.lName = lastName;
//     this.bYear = birthYear;
//     this.academy = academy;
// }

// let studentArray = [];

// let firstNameInpt = document.getElementById("firstName");
// let lastNameInpt = document.getElementById("lastName");
// let birthYearInpt = document.getElementById("birthYear");
// let academyInpt = document.getElementById("academy");

// let btnSignUp = document.getElementById("btn");
// btnSignUp.addEventListener("click", function(){
//     let firstName = firstNameInpt.value;
//     let lastName = lastNameInpt.value;
//     let birthYear = birthYearInpt.value;
//     let academy = academyInpt.value;


//     if(!firstName || !lastName || !birthYear || !academy){
//         console.log("Error, please type valid information");
//     } else {
//         let student = new Students(firstName, lastName, birthYear, academy);
//         studentArray.push(student);
//         console.log(student);
//     }
// })