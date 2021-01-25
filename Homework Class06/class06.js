//Homework - create dynamic table
function  createTable() {
    var rows = document.getElementById("rows").value
    var columns = document.getElementById("columns").value;
    for (var r = 0; r < rows; r++) {
      var row = document.getElementById("myTable").insertRow(r);
    }
    for (var c = 0; c < columns; c++) {
        var cell = row.insertCell(c);
        cell.innerHTML = "Row- " + r + " Col- " + c;
      }
}