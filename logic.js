const gridSize = prompt('Enter Grid Size: ')
const container = document.querySelector('#grid-container')

// create grid based on input
function createGrid (gridSize) {
    // nothing above 100!
    if (gridSize > 100) {
        gridSize = 100
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
            cell.style.backgroundColor = 'red'
            })

        cell.addEventListener('mouseover', () => {
            if (isDrawing) {
                cell.style.backgroundColor
            }
        })
        
        cell.addEventListener('mouseup', () => {
            isDrawing = false;
        });

        cell.addEventListener('mouseleave', () => {
            if (isDrawing) {
                cell.style.backgroundColor = 'red';
            }
        })
    })
        

}

document.addEventListener('DOMContentLoaded', () => {
    createGrid(gridSize)
})


