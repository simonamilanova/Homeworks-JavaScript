//Exercise 2 from Class04
let btn = document.getElementById("btn");
btn.addEventListener("click", (element, color) => {
    element = document.getElementById("header");
    color = document.getElementById("color").value;
    element.style.color = `${color}`;
    if(color === ""){
            element.style.color = "black";
    }
})

btn.addEventListener("click", (element, textSize) => {
    element = document.getElementById("header");
    textSize = document.getElementById("txt").value;
    element.style.fontSize = `${Number(textSize)}px`;

    if(textSize === ""){
        element.style.fontSize = "24px";
    }
})