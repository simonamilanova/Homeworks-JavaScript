//HOMEWORK PART 2

// arr = [2, 3, 5, 6, 7];

// let myDiv = document.getElementById("main");
// myDiv.innerHTML += 
// `<ul>
//     <li>${arr[0]}</li>
//     <li>${arr[1]}</li>
//     <li>${arr[2]}</li>
//     <li>${arr[3]}</li>
//     <li>${arr[4]}</li>
    
// </ul>`;
// let result = arr[0] + arr[1] + arr[2] + arr[3] + arr[4];

// myDiv.innerHTML += `The sum of these numbers is ${result}.`;

// myDiv.innerHTML += `<br>`;
// myDiv.innerHTML += `${arr[0]} + ${arr[1]} + ${arr[2]} + ${arr[3]} + ${arr[4]} = ${result}`;



//BONUS HOMEWORK
let recipe = prompt("Enter the name of the recipe");

let ingredients = prompt("How many ingredients do we need for the recipe?");

let namesOfIngredients = prompt("Name all the ingredients");
let namesIngredients = prompt("Name all the ingredients");
let nameIngredient = prompt("Name all the ingredients");

let secondDiv = document.getElementById("recipe");
secondDiv.innerHTML += `<h1>${recipe}</h1>`

let div = document.getElementById("recipe");
div.innerHTML += `<ul>
                    <li>${namesOfIngredients}</li>
                    <li>${namesIngredients}</li>
                    <li>${nameIngredient}</li>
                </ul>`;
