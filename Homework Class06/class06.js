//Homework - create dynamic table
function  createTable() {
    var rows = Number(document.getElementById("rows").value)
    var columns = Number(document.getElementById("columns").value)
    for (var r = 0; r < rows; r++) {
      var row = document.getElementById("myTable").insertRow(r);
    
    for (var c = 0; c < columns; c++) {
        var cell = row.insertCell(c);
        cell.innerHTML = "Row- " + r + " Col- " + c;
      }
    }  
}

/* Na mailot napishav deka ne mi ispagase zadacava, ama ja najdov greskata, mi falel kaj vtoriot for 
zagrada i sega tocno ispaga*/

/*difference between keypress, keydown, keyup

keyup - fires when the user releases a key, after the default action of that key has been performed. 
Keypress - fires when an actual character is being inserted in, for instance, a text input. It repeats while the user keeps the key depressed.
Keydown fires when the user depresses a key. It repeats while the user keeps the key depressed.

difference betwenn mouseover, mouseout and mouseleave 

mouseleave is fired when the pointer has exited the element and all of its descendants 
mouseout is fired when the pointer leaves the element or leaves one of the element's descendants
mouseover is fired at an element when the mouse is used to move the cursor onto the element or one of its child elements.*/