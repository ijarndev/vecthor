class Vector {
    constructor(x, y) {
        this.gap = 20

        this.origins = {
            x: cw / 2,
            y: ch / 2
        }

        this.coords = {
            x: this.origins.x + x * this.gap,
            y: this.origins.y - y * this.gap
        }

        ctx.beginPath()
        ctx.moveTo(cw / 2, ch / 2)
        ctx.strokeStyle = colors.blue
        ctx.lineWidth = 2
    }

    render() {
        ctx.lineTo(this.coords.x, this.coords.y)
        ctx.closePath()
        ctx.stroke()

        const rootDot = new Dot(this.coords.x, this.coords.y).render(0)
        const tipDot = new Dot(this.origins.x, this.origins.y).render()
    }
}

class Coordinates {
    constructor(tileset) {
        this.originX = cw / 2
        this.originY = ch / 2
        this.vx = cw
        this.vy = ch
        this.unitsX = Math.floor(this.vx / SYSTEM_GAP) + 1
        this.unitsY = Math.floor(this.vy / SYSTEM_GAP) + 1
        this.tileset = tileset
        this.offsetX = cw - (tileset.x * SYSTEM_GAP)
        this.offsetY = ch - (tileset.y * SYSTEM_GAP)
    }

    render() {
        ctx.beginPath()
        ctx.moveTo(this.originX, 0)
        ctx.strokeStyle = colors.gray
        ctx.lineTo(this.originX, ch)
        ctx.stroke()
        ctx.closePath()
    
        ctx.beginPath()
        ctx.moveTo(0, this.originY)
        ctx.strokeStyle = colors.gray
        ctx.lineTo(cw, this.originY)
        ctx.stroke()
        ctx.closePath()

        for(let i = 0; i < this.tileset.x; i++) {
            const start = (i === 0) ? this.offsetX / 2 : i * SYSTEM_GAP + this.offsetX / 2

            ctx.font = '10px Courier'
            ctx.fillStyle = 'yellow'
            ctx.fillText('n', start, this.originY + 10)

            ctx.fillStyle = 'yellow'
            ctx.fillRect(start, this.originY, 2, -2)
        }

        for(let i = 0; i < this.tileset.y; i++) {
            const start = (i === 0) ? this.offsetY / 2 : i * SYSTEM_GAP + this.offsetY / 2

            console.log(this.tileset.y)

            ctx.font = '10px Courier'
            ctx.fillStyle = 'green'
            ctx.fillText('n', this.originX - 10, start)

            ctx.fillStyle = 'green'
            ctx.fillRect(this.originX, start, 2, -2)
        }
    }
}

class Dot {
    constructor(x, y, color) {
        this.x = x
        this.y = y
        this.color = color

        ctx.fillStyle = 'red'
    }

    render() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, 2, 0, 2 * Math.PI)
        ctx.stroke()
    }
}