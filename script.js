// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    numRows += 1;
    let grid = document.getElementById("grid");
    if(numCols == 0)
    {
        numCols += 1
    }
    let newRow = document.createElement("tr");
    let newCol = document.createElement("td");
    for(let i = 0; i < numCols; i++)
    {   

        newCol.onclick = function() {newCol.style.backgroundColor = colorSelected};
        newRow.appendChild(newCol);
    }
    grid.appendChild(newRow);
}

// Add a column
function addC() {

}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}