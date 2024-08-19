const eraser = document.querySelector('#Eraser');
const selectColor = document.querySelector('.selectColor');
const resetBtn = document.querySelector('.resetBtn');
let selectedColor = selectColor.value;
const container = document.querySelector('#grid-container')
const changeGridSize = document.querySelector('#gridSize');

document.addEventListener('DOMContentLoaded', () => {
    let gridSize = parseInt(prompt('Please enter a number between 2 - 100')) || 35;
    createGrid(gridSize);

    // Event listeners
    changeGridSize.addEventListener('click', () => {
        gridSize = parseInt(prompt('Please enter a number between 2 - 100')) || 35;
        createGrid(gridSize);
    });

    

    selectColor.addEventListener('change', () => {
        selectedColor = selectColor.value;
    });

    eraser.addEventListener('click', () => {
        selectedColor = 'white';
    });

    resetBtn.addEventListener('click', () => {
        document.querySelectorAll('.gridCell').forEach(cell => {
            cell.style.backgroundColor = 'white';
        });
    });
});

// create grid based on input
function createGrid (gridSize) {
    // clear before creating a new one
    container.innerHTML = '';
    // nothing above 100!
    if (gridSize > 100 || gridSize < 2 || Number.isInteger(gridSize) == false ) {
        gridSize = 35
    }

    // create rows
    for (let i = 1; i <= gridSize; i++) {
        const gridRow = document.createElement('div')
        gridRow.className= 'gridRow'
        container.appendChild(gridRow)

    // cells
        for (let j = 1; j<= gridSize; j++) {
            const gridCell = document.createElement('div')
            gridCell.className = 'gridCell'
            gridRow.appendChild(gridCell)
        }
        

    }
    
    let isDrawing = false
    const cells = document.querySelectorAll('.gridCell')
    cells.forEach(cell => {
        cell.addEventListener('mousedown', () => {
            isDrawing = true
            cell.style.backgroundColor = selectedColor
            })

        cell.addEventListener('mouseover', () => {
            if (isDrawing) {
                cell.style.backgroundColor = selectedColor
            }
        })
        
        cell.addEventListener('mouseup', () => {
            isDrawing = false;
        });

        cell.addEventListener('mouseleave', () => {
            if (isDrawing) {
                cell.style.backgroundColor = selectedColor;
            }
        })
        // for removing color from canvas
        resetBtn.addEventListener('click', () => {
            cell.style.backgroundColor = 'white'
        })
    })
}


