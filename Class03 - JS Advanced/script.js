//Homework 1 - with ajax
$(document).ready(function(){
    $("#btn").click(function(){
        $.ajax({
            type: "GET",
            url: "https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json",
            success: function (response) {
                let printAcademyName = $("#academyName");
                let printStudents = $("#printStudents");

                let responseObj = JSON.parse(response);
                console.log(responseObj);

                printAcademyName.text(`The name of the academy is: ${responseObj.academy}`); 

                for (let i = 0; i < responseObj.students.length; i++) {
                    printStudents.append(`<li>${responseObj.students[i]}</li>`);
                }
            },
            error: function (error) {
                console.log("Bad Request");
            }
        })
    })
})

//Homework 1 - with fetch
// let btn = document.getElementById("btn");
// btn.addEventListener("click", function(){
//     fetch("https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json")
//         .then(function(response){
//             return response.json()
//         }) .then(function(data){
//             let printAcademyName = $("#academyName");
//             let printStudents = $("#printStudents");

//             printAcademyName.text(`The name of the academy is: ${data.academy}`);
//             for(let i = 0; i < data.students.length; i++){
//                 printStudents.append(`<li>${data.students[i]}</li>`);
//             }
//         }) .catch(function(error){
//             console.log("Bad Request");
//         })
// })

//Homework 2 - with ajax
/* So ova api https://swapi.dev/api/people/1 ne mozev da ja resham zadacata, mi davase vakva poraka vo konzola - Access to XMLHttpRequest at 'https://swapi.dev/api/people/1' from origin 'null' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. */

//  $(document).ready(function(){
//     $("#btn").click(function(){
//         $.ajax({
//             type: "GET",
//             url: "https://swapi.dev/api/people/1",
//             success: function(response) {
//                 //let responseObject = JSON.parse(response);
//                 console.log(response);
//             },
//             error: function(error) {
//                 console.log("Bad Request")
//             }

//         })
//     })
// })

//Homework 2 - with fetch 
// let btn = $("#btn");
// btn.click(function(){
//     fetch("https://jsonplaceholder.typicode.com/users/")
//         .then(function (response){
//             return response.json();
//         }) .then(function (data){
//             console.log(data[0]);

//             let printName = $("#printName");
//             printName.text(`Name of the user is: ${data[0].name}`)
  
//            $("tr:nth-child(1) td:nth-child(2)").text(data[0].address.street);
//            $("tr:nth-child(2) td:nth-child(2)").text(data[0].email);
//            $("tr:nth-child(3) td:nth-child(2)").text(data[0].username);
//            $("tr:nth-child(4) td:nth-child(2)").text(data[0].website);
                      
//         }).catch(function(error){
//             console.log("Bad Request");
//         })
// })

//Homework 2 - with ajax
// $(document).ready(function(){
//     $("#btn").click(function(){
//         $.ajax({
//             type: "GET",
//             url: "https://jsonplaceholder.typicode.com/users/",
//             success: function (response) {
//                 console.log(response[0]);
                
//                 let printName = $("#printName");
//                 printName.text(`Name of the user is: ${response[0].name}`)

//                 $("tr:nth-child(1) td:nth-child(2)").text(response[0].address.street);
//                 $("tr:nth-child(2) td:nth-child(2)").text(response[0].email);
//                 $("tr:nth-child(3) td:nth-child(2)").text(response[0].username);
//                 $("tr:nth-child(4) td:nth-child(2)").text(response[0].website);

//             },
//             error: function(error) {
//                 console.log("Bad request");
//             }
//         })
//     })
// })


