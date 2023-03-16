const container = document.querySelector('.container')
const sizeEl = document.querySelector('.size')
const resetBtn = document.querySelector('.button')
const color = document.querySelector('.color')
let size = sizeEl.value;
let draw = false;

function generateGrid() {
    container.style.setProperty('--size', size)
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div')
        div.classList.add('box')

        div.addEventListener('mouseover', () => onMouseOver(div))
        div.addEventListener('mousedown', () => onMouseDown(div))

        container.appendChild(div)
    }
}

generateGrid()


function onMouseOver(div) {
    if (!draw) return
    div.style.backgroundColor = color.value
}

function onMouseDown(div) {
    div.style.backgroundColor = color.value
    draw = true
}

window.addEventListener('mouseup', () => {
    draw = false
})

resetBtn.addEventListener('click', () => {
    container.innerHTML = ''
    generateGrid()
})

sizeEl.addEventListener('keyup', () => {
    size = sizeEl.value;
    container.innerHTML = ''
    generateGrid()
})