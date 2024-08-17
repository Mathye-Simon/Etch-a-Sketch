document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('grid-container');
    
    // Create 16 rows
    for (let i = 0; i < 16; i++) {
        const gridRow = document.createElement('div');
        gridRow.className = 'gridRow';
        
        // Create 16 cells in each row
        for (let j = 0; j < 16; j++) {
            const gridCell = document.createElement('div');
            gridCell.className = 'grid-cell';
            gridRow.appendChild(gridCell);
        }
        
        container.appendChild(gridRow);
    }
});
