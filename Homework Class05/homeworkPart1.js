let firstHeader = document.getElementById("myTitle");
firstHeader.innerText = "My new header!";

let firstP = document.getElementsByClassName("paragraph")[0];
firstP.innerText = "First changed paragraph.";

let secondDiv = document.getElementsByTagName("div")[1];
let secondP = secondDiv.firstElementChild;
secondP.innerText = "Second changed paragraph.";

let divText = document.getElementsByTagName("div")[1];
let textElement = divText.lastElementChild;
textElement.innerText = "The text in this property is also changed."

let lastDiv = document.getElementsByTagName("div")[2];
let headingOne = lastDiv.firstElementChild;
headingOne.innerText = "Heading one is now changed.";

let lDiv = document.getElementsByTagName("div")[2];
let headingThree = lDiv.lastElementChild;
headingThree.innerText = "Heading three is also changed.";
