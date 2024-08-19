let changeGridSize = document.querySelector('#gridSize')
let gridSize = parseInt(prompt('Please enter a number between 2 - 100'))
const eraser = document.querySelector('#Eraser')
const container = document.querySelector('#grid-container')
const selectColor = document.querySelector('.selectColor')
let selectedColor = selectColor.value
const resetBtn = document.querySelector('.resetBtn')


// erasing and color picking
selectColor.addEventListener('click', () => {selectedColor = selectColor.value})   
eraser.addEventListener('click', ()=> {
    selectedColor='white'
})

const removeOutline = document.querySelector('#removeOutline')


// create grid based on input
function createGrid (gridSize) {
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
            const gridCell = document.createElement('grid')
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

changeGridSize.addEventListener('click', ()=> {
    location.reload()
})
document.addEventListener('DOMContentLoad',createGrid(gridSize))

