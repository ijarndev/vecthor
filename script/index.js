const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

const INPUT = {
    component1: document.querySelector('#c1'),
    component2: document.querySelector('#c2'),
    direction: document.querySelector('#dir'),
    renderBtn: document.querySelector('#render-btn'),
    wipeBtn: document.querySelector('#wipe-btn'),
    range: document.querySelector('#range')
}

const SYSTEM_GAP = 20

const SCREEN = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
}

const TILES = {
    x: Math.floor(SCREEN.width / SYSTEM_GAP),
    y: Math.floor(SCREEN.height / SYSTEM_GAP)
}

canvas.width = TILES.x * SYSTEM_GAP
canvas.height = TILES.y * SYSTEM_GAP

const cw = canvas.width
const ch = canvas.height

const colors = {
    random: getRandom(['#ffffff', '#09f']),
    white: '#ffffff',
    gray: '#d3d3d330',
    blue: '#09f'
}

function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)]
}

const COORDS = new Coordinates(TILES, INPUT.range.value)
COORDS.render()

const v = new Vector(4, 2)
v.render()

// document.addEventListener('keyup', (e) => {
//     if(e.key === '1')
//         new Vector(Math.floor(Math.random() * TILES.x / 2), Math.floor(Math.random() * TILES.y / 2)).render()
//     if(e.key === '2')
//         new Vector(Math.floor(Math.random() * TILES.x / -2), Math.floor(Math.random() * TILES.y / 2)).render()
//     if(e.key === '3')
//         new Vector(Math.floor(Math.random() * TILES.x / -2), Math.floor(Math.random() * TILES.y / -2)).render()
//     if(e.key === '4')
//         new Vector(Math.floor(Math.random() * TILES.x / 2), Math.floor(Math.random() * TILES.y / -2)).render()
// })

INPUT.renderBtn.addEventListener('click', () => {
    const vector = new Vector(INPUT.component1.value, INPUT.component2.value)
    vector.render()
})

INPUT.wipeBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, cw, ch)
    COORDS.render()
})

INPUT.range.addEventListener('change', () => {
    ctx.clearRect(0, 0, cw, ch)
    new Coordinates(TILES, INPUT.range.value).render()
})