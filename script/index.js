const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

const INPUT = {
    component1: document.querySelector('#c1'),
    component2: document.querySelector('#c2'),
    direction: document.querySelector('#dir'),
    renderBtn: document.querySelector('#render-btn'),
    wipeBtn: document.querySelector('#wipe-btn')
}

const SYSTEM_GAP = 20

canvas.width = document.documentElement.clientWidth
canvas.height = document.documentElement.clientHeight

const cw = canvas.clientWidth
const ch = canvas.clientHeight

const TILES = {
    x: Math.floor(cw / SYSTEM_GAP),
    y: Math.floor(ch / SYSTEM_GAP)
}

const colors = {
    white: '#ffffff',
    gray: '#d3d3d330',
    blue: '#09f'
}

const coords = new Coordinates(TILES)
coords.render()

const v = new Vector(3, 4)
v.render()

INPUT.renderBtn.addEventListener('click', () => {
    const vector = new Vector(INPUT.component1.value, INPUT.component2.value)
    vector.render()
})

INPUT.wipeBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, cw, ch)
    coords.render()
})