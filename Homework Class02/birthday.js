// var userInput = prompt("Enter your birthday mm/dd/yyyy");

// var stringFormatedDate = userInput.match(/ (\d\d) (\d\d) (\d\d\d\d) /);

// var date = new Date(stringFormatedDate[3], stringFormatedDate[1]-1, stringFormatedDate[2]);

// var day = date.getDate();

// var month = date.getMonth() + 1;

// var year = date.getFullYear();

// var todayDate = new Date();

// var todayDay = todayDate.getDate();

// var todayMonth = todayDate.getMonth() + 1;

// var todayYear = todayDate.getFullYear();
  
// if (todayDateDate >= 04 && todayDateMonth >= 01 && todayDateFullYear >= 2003) {
//     console.log("Happy Birthday!");
// }
// else if (todayDateDate >= 05 && todayDateMonth >= 02 && todayDateFullYear >= 2004) {
//     console.log("Congratulations you are over 18");
//  }
// else if (todayDateDate <= 03 && todayDateMonth <= 03 && todayDateFullYear <= 2002) {
//     console.log("Sorry you are not over 18");
// }


// nov obid 

var userInput = prompt("Enter your birthday mm/dd/yyyy");

var stringFormatedDate = userInput.match(/(\d\d)(\d\d)(\d\d\d\d)/);

var date = new Date(stringFormatedDate[3], stringFormatedDate[1]-1, stringFormatedDate[2]);

var dateDay = date.getDate();

var dateMonth = date.getMonth() + 1;

var dateYear = date.getYear();

var todayDate = new Date();

var todayDateDay = todayDate.getDate(); //10

var todayDateMonth = todayDate.getMonth() + 1; //01

var todayDateYear = todayDate.getYear(); //2021
  
if(dateYear == 2003 || dateDay == todayDateDay || dateMonth == todayDateMonth){
    console.log("Happy Birthday");
}
else if(dateYear < 2003 || dateMonth <= todayDateMonth || dateDay <= todayDateDay){
    console.log("You are older than 18");
}

else if(dateYear > 2003 || dateMonth >= todayDateMonth || dateDay >= todayDateDay){
    console.log("You are under 18");
}

