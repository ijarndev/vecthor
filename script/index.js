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
    white: '#ffffff',
    gray: '#d3d3d330',
    blue: '#09f'
}

const coords = new Coordinates(TILES, INPUT.range.value)
coords.render()

const v = new Vector(3, 3)
v.render()

INPUT.renderBtn.addEventListener('click', () => {
    const vector = new Vector(INPUT.component1.value, INPUT.component2.value)
    vector.render()
})

INPUT.wipeBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, cw, ch)
    coords.render()
})

INPUT.range.addEventListener('change', () => {
    ctx.clearRect(0, 0, cw, ch)
    new Coordinates(TILES, INPUT.range.value).render()
})