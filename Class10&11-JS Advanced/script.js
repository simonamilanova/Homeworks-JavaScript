//Homework from Class10
//exercise 1/2 from class10
function Academy (name, students, subjects, start, end) {
    this.name = name;
    this.students = students;
    this.subjects = subjects;
    this.start = start;
    this.end = end;
    this.numberOfClasses = function () {
        console.log(this.subjects.length * 10);
    }

    this.printStudents = function () {
        console.log(this.students);
    };

    this.printSubjects = function () {
        console.log(this.subjects);
    };

};

let instnaceAcademy = new Academy ("SEDC", ["Ana", "Petar", "Marija"], ["Math", "English", "Biology"], new Date(10/02/2020), new Date(10/02/2021));

function Subject (title, isElective, students) {
    this.title = title;
    this.numberOfClasses = 10;
    this.isElective = isElective;
    this.academy = instnaceAcademy;
    this.students = students;

    this.overrideClasses = function (number) {
        if(number === this.overrideClasses && number > 3) {
            this.numberOfClasses = number
        }
    };
};

let instanceSubject = new Subject ("Math", true, ["sara", "ana", "petar"]);
//console.log(instanceSubject);

function Student (firstName, lastName, age, completedSubjects) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = completedSubjects;
    this.academy = null;
    this.currentSubject = null;

    this.startAcademy = function () {
        this.academy = instnaceAcademy;
    };

    this.startSubject = function () {
        if(this.academy === instnaceAcademy) {
            instanceSubject = instnaceAcademy;
        } else {
            console.log("An error has occurred");
        }
    };
};

// instnaceAcademy.printStudents();
// instnaceAcademy.printSubjects();
// instnaceAcademy.numberOfClasses();
// instanceSubject.overrideClasses(5);



//Homework from Class11
//Exercise 1 and Exercise 2 from class11
function Person (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.getFullName = function () {
        console.log(`${this.firstName} ${this.lastName}`);
    }
} 

function Student (firstName, lastName, age, studentId) {
    Object.setPrototypeOf(this, new Person(firstName, lastName, age))
    this.academyName = "SEDC";
    this.studentId = studentId;

    this.study = function () {
        console.log(`The student ${this.firstName} is studying in the ${this.academyName} academy.`)
    }
}


function DesignStudent (firstName, lastName, age, studentId, isStudentOfTheMonth) {
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, studentId));
    this.isStudentOfTheMonth = isStudentOfTheMonth;

    this.attendAdobeExam = function() {
        console.log(`The student ${this.firstName} is doing an Adobe exam.`);
    };
};

function CodeStudent (firstName, lastName, age, studentId, isStudentOfTheMonth, hasIndividualProject, hasGroupProject) {
    Object.setPrototypeOf(this, new DesignStudent(firstName, lastName, age, studentId, isStudentOfTheMonth));
    this.hasIndividualProject = hasIndividualProject;
    this.hasGroupProject = hasGroupProject;

    this.doProject = function() {
        if(hasIndividualProject === true) {
            console.log(`The student ${this.firstName} is working on an individual project.`);
        } else if(hasIndividualProject === false) {
            console.log(`The student ${this.firstName} is not working on an individual project.`);
        }

        if (hasGroupProject === true) {
            console.log(`The student ${this.firstName} is working on a group project.`);
        } else if (hasGroupProject === false) {
            console.log(`The student ${this.firstName} is not working on a group project.`);

        }
    }
}

function NetworkStudent (firstName, lastName, age, studentId, isStudentOfTheMonth, hasIndividualProject, hasGroupProject, academyPart) {
    Object.setPrototypeOf(this, new CodeStudent(firstName, lastName, age, studentId, isStudentOfTheMonth, hasIndividualProject, hasGroupProject));
    this.academyPart = academyPart;

    this.attendCiscoExam = function () {
        console.log(`The student ${this.firstName} is doing a Cisco exam.`);

    }
}

let studentOne = new NetworkStudent("Simona", "Milanova", 23, 456, true, true, false, 2);
studentOne.attendCiscoExam();
studentOne.doProject();
studentOne.attendAdobeExam();
studentOne.study();

let studentTwo = new NetworkStudent("Marija", "Gucinovska", 22, 123, true, false, true, 4);
studentTwo.attendCiscoExam();
studentTwo.doProject();
studentTwo.attendAdobeExam();
studentTwo.study();