//1. Create a javascript function that will find all numbers divisable by 7 and 3 in a array from 1 to 100. 

// function one (){
//     for(var num = 1; num <= 100; num++){
//         if(num / 7 === 0 && num / 3 === 0){
//             var arr = new Array();
//             arr.push(num);
//             console.log(arr);
//         }
//     }
// }

// one();

/*2. Create a Javascript ATM machine. The ATM should have the following functions: 
- make desposit (this function should add money to the users balance) 
- make withdrawal (this function should should withdraw money to the users balance) 
- get the balance (this function should display the current balance of the user)
 - exit (this function should close the window) create interactive menu using alerts*/

function atm (){
    let userAccount = 1000;
    let result = 0;
        let btnSubmit = document.getElementById("btnSubmit");
        btnSubmit.addEventListener("click", makeDeposit);

        function makeDeposit (){
        let userInput = Number(document.getElementById("deposit").value);
        result = userInput + userAccount;
        console.log(`You have successfully added ${userInput} to your account and you have ${result} cash  on your account`);
        }

        let btnWithdrawl = document.getElementById("btnWithdrawl");
        btnWithdrawl.addEventListener("click", makeWithdrawl);

        function makeWithdrawl() {
            let userInput = Number(document.getElementById("deposit").value);
            result = result - userInput;
            console.log(`You have withdrawed ${userInput} dollars and you have ${result} left`);
        }

        let btnBalance = document.getElementById("btnBalance");
        btnBalance.addEventListener("click", myBalance);

        function myBalance(){
            console.log(`You currently have ${result} dollars`);
        }

        let btnExit = document.getElementById("btnExit");
        btnExit.addEventListener("click", exitAtm)
        function exitAtm () {
            alert("You have exited the ATM");
        }
    }

atm();


//Exercise 3
// let existingUsers = [
//     {
//       username: "Simona",
//       password: "Simona1",
//       isAdmin: true,
//     }
// ];

// let divUsers = document.getElementById("usersFromArray");
// divUsers.innerHTML += 
// `
// <ol>
    
// </ol>
// `

// //LogIn
// var userArray = new Array ();
// userArray += existingUsers;

// function LogInUsers (username, password) {
//     this.name = username;
//     this.password = password;
// }

// var btnLogIn = document.getElementById("btnLogIn");
// btnLogIn.addEventListener("click", logIn);
// function logIn () {
//     var userLogIn = document.getElementById("username").value
//     //var passLogIn = document.getElementById("password").value
//     console.log(`Welcome ${userLogIn} to our awesome app`);
// }

// logIn();