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
    for(let i = 0; i < numCols; i++)
    {   
        let newCol = document.createElement("td");
        newCol.onclick = function() {newCol.style.backgroundColor = colorSelected};
        newRow.appendChild(newCol);
    }
    grid.appendChild(newRow);
}

// Add a column
function addC() {
    numCols += 1;
    if(numRows == 0)
    {
        addR();
    }
    else
    {
        let rows = document.getElementsByTagName("tr");
        for(let i = 0; i < numRows; i++)
        {
            let newCol = document.createElement("td");
            newCol.onclick = function() {newCol.style.backgroundColor = colorSelected};
            rows[i].appendChild(newCol);
        }
    }
}

// Remove a row
function removeR() {
    if(numRows != 0)
    {
        numRows -= 1
        let grid = document.getElementById("grid");
        let row = grid.querySelector("tr");
        grid.removeChild(row);
        if(numRows == 0)
        {
            numCols = 0;
        }
    }
}

// Remove a column
function removeC() {
    if(numCols != 0)
    {
        numCols -= 1;
        let rows = document.getElementsByTagName("tr");
        for(let i = 0; i < numRows; i++)
        {
            let currentCol = rows[i].querySelector("td");
            rows[i].removeChild(currentCol);
        }
        if(numCols == 0)
        {
            let grid = document.getElementById("grid");
            while (grid.rows.length > 0)
            {
                grid.deleteRow(0);
            }
            numRows = 0;
        }
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    let rows = document.getElementsByTagName("tr");
    for(let row = 0; row < numRows; row++)
    {
        let currentRow = rows[row];
        for(let cell = 0; cell < numCols; cell++)
        {
            let currentCell = currentRow.children[cell];
            if(currentCell.getAttribute("style") == null || currentCell.style.backgroundColor == "white")
            {
                currentCell.style.backgroundColor = colorSelected;
            }
        }
    }
}

// Fill all cells
function fillAll(){
    let rows = document.getElementsByTagName("tr");
    for(let row = 0; row < numRows; row++)
    {
        let currentRow = rows[row];
        for(let cell = 0; cell < numCols; cell++)
        {
            let currentCell = currentRow.children[cell];
            currentCell.style.backgroundColor = colorSelected;
        }
    }
}

// Clear all cells
function clearAll(){
    let rows = document.getElementsByTagName("tr");
    for(let row = 0; row < numRows; row++)
    {
        let currentRow = rows[row];
        for(let cell = 0; cell < numCols; cell++)
        {
            let currentCell = currentRow.children[cell];
            currentCell.style.backgroundColor = "white";
        }
    }
}