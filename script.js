const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => boxesContainer.classList.toggle('big')) 

function createBoxes() {
  for (let i = 0; i < 4; i++) {  // Loops through 4 rows
    for (let j = 0; j < 4; j++) {  // Loops through 4 columns
      const box = document.createElement('div')  // Creates a new div
      box.classList.add('box')  // Adds the 'box' class
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px` 
      // Sets the background position to align each box
      boxesContainer.appendChild(box)  // Appends the box to the container
    }
  }
}

createBoxes()