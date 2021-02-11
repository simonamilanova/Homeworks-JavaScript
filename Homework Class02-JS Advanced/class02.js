//Title Generator 
let button = document.getElementById("btn");

button.addEventListener("click", function () {
    let color = document.getElementById("color").value;
    let fontSize = document.getElementById("fontSize").value;
    let textInpt = document.getElementById("txt").value;

    let heading = document.getElementById("generateHeading");
    heading.innerHTML += `<h1 id="headingOne"></h1>`;

    let headingOne = document.getElementById("headingOne");
    headingOne.innerText = `${textInpt}`;
    headingOne.style.color = `${color}`;
    headingOne.style.fontSize = `${fontSize}`;

    
})

//List Generator
// let btn = document.getElementById("btn");
// btn.addEventListener("click", function(){
//     let colorInpt = document.getElementById("color").value;
//     let fontSizeInpt = document.getElementById("fontSize").value;
//     let itemsInpt = document.getElementById("items").value;

//     let divElement = document.getElementById("createList");
//     divElement.innerHTML += `<ul id="listElm"></ul>`;
    
//     let listElm = document.getElementById("listElm");
    
//     listElm.innerHTML += `<li>${itemsInpt}</li>`
//     listElm.style.color = `${colorInpt}`;
//     listElm.style.fontSize = `${fontSizeInpt}`;
// })

