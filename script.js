document.addEventListener('DOMContentLoaded', function() {
    createGrid(16);
    
    // Create controls container
    const controlsContainer = document.createElement('div');
    controlsContainer.id = 'controls';
    document.body.insertBefore(controlsContainer, document.querySelector('#container'));
    
    // Button for custom grid size
    const customBtn = document.createElement('button');
    customBtn.textContent = 'Choose custom grid';
    
    // Add event listener to the button
    customBtn.addEventListener('click', () => {
        const size = prompt('Enter grid size (1-100):');
        const gridSize = parseInt(size);
        if (gridSize && gridSize > 0 && gridSize <= 100) {
            createGrid(gridSize);
        } else {
            alert('Please enter a valid number between 1 and 100');
        }
    });
    
    controlsContainer.appendChild(customBtn);
});

// Create grid function
function createGrid(squaresPerSide) {
    const container = document.querySelector('#container');
    // Clear container (modern way: remove all child nodes safely)
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  
    const containerSize = 960;
    const squareSize = containerSize / squaresPerSide;
  
    // Set container style for flexbox
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.width = `${containerSize}px`;
    container.style.height = `${containerSize}px`;
  
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const square = document.createElement('div');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.border = '1px solid #ddd';
        square.classList.add('grid-square');

        // Add hover effect
        square.addEventListener('mouseenter', () => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });

        container.appendChild(square);
    }
}


