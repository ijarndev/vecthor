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

        new Dot(this.origins.x, this.origins.y).render()
        new Dot(this.coords.x, this.coords.y).render()
    }
}

class Coordinates {
    constructor(tileset, range) {
        this.originX = cw / 2
        this.originY = ch / 2
        this.vx = cw
        this.vy = ch
        this.gap = range
        this.unitsX = Math.floor(this.vx / this.gap) + 1
        this.unitsY = Math.floor(this.vy / this.gap) + 1
        this.tileset = { x: Math.floor(screen.width / this.gap), y: Math.floor(screen.height / this.gap) }
        this.offsetX = cw - (tileset.x * this.gap)
        this.offsetY = ch - (tileset.y * this.gap)

        if(this.tileset.x %2 === 0) this.tileset.x -= 1

        console.log(`x-length: ${this.tileset.x}`)
        console.log(`y-length: ${this.tileset.y}`)
        console.log(`screen-x: ${cw}`)
        console.log(`screen-y: ${ch}`)
        console.log(`offset-x: ${cw - this.tileset.x * this.gap}`)
    }

    // debug

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
            const pos = this.originX + this.gap * i
            const neg = this.originX + this.gap * -i

            ctx.fillStyle = 'yellow'
            ctx.font = '10px Courier'

            ctx.fillText(i, pos, this.originY + 10)
            ctx.fillText(-i, neg, this.originY + 10)
            ctx.fillRect(pos, this.originY, 2, 2)
            ctx.fillRect(neg, this.originY, 2, 2)
        }

        for(let i = 0; i < this.tileset.y; i++) {
            const pos = this.originY + this.gap * -i
            const neg = this.originY + this.gap * i

            ctx.fillStyle = 'green'
            ctx.font = '10px Courier'

            ctx.fillRect(this.originX, pos, 2, 2)
            ctx.fillRect(this.originX, neg, 2, 2)
            ctx.fillText(i, this.originX + 15, pos)
            ctx.fillText(-i, this.originX + 15, neg)
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