class Coordinates {
    constructor(tileset, range) {
        this.originX = cw / 2
        this.originY = ch / 2
        this.vx = cw
        this.vy = ch
        this.gap = range
        this.tileset = { x: Math.floor(screen.width / this.gap), y: Math.floor(screen.height / this.gap) }
        this.offsetX = cw - (tileset.x * this.gap)
        this.offsetY = ch - (tileset.y * this.gap)

        if(this.tileset.x %2 === 0) this.tileset.x -= 1

        // console.log(`x-length: ${this.tileset.x}`)
        // console.log(`y-length: ${this.tileset.y}`)
        // console.log(`screen-x: ${cw}`)
        // console.log(`screen-y: ${ch}`)
        // console.log(`offset-x: ${cw - this.tileset.x * this.gap}`)
    }

    // debug

    render(matches) {
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

        ctx.font = '10px Arial'
        ctx.fillStyle = colors.gray
        
        for(let i = 0; i < this.tileset.x; i++) {
            const pos = this.originX + this.gap * i
            const neg = this.originX + this.gap * -i

            if(i != 0) {
                ctx.fillText(i, pos, this.originY + 15)
                ctx.fillText(-i, neg, this.originY + 15)
                ctx.fillRect(pos, this.originY, 2, 2)
                ctx.fillRect(neg, this.originY, 2, 2)
            }
        }

        for(let i = 0; i < this.tileset.y; i++) {
            const pos = this.originY + this.gap * -i
            const neg = this.originY + this.gap * i

            if(i != 0) {
                ctx.fillRect(this.originX, pos, 2, 2)
                ctx.fillRect(this.originX, neg, 2, 2)
                ctx.fillText(i, this.originX - 20, pos)
                ctx.fillText(-i, this.originX - 20, neg)
            }
        }
    }
}

class Vector {
    constructor(x, y) {
        this.gap = 20
        this.posX = x
        this.posY = y

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
        ctx.lineWidth = 2
    }

    direction(x, y) {
        let radians = Math.atan2(y, x)
        let degrees = radians * (180 / Math.PI)

        if(degrees < 0) degrees += 360

        return `dir: ${degrees.toFixed(2)}º | ${radians.toFixed(2)} rad`
    }

    render() {
        ctx.strokeStyle = colors.blue
        ctx.lineTo(this.coords.x, this.coords.y)
        ctx.closePath()
        ctx.stroke()

        new Dot(this.origins.x, this.origins.y)
        new Dot(this.coords.x, this.coords.y)
        new Leg(
            this.coords.x,
            this.coords.y,
            this.origins.x + this.posX * this.gap,
            this.origins.y
        )
        new Leg(
            this.coords.x,
            this.coords.y,
            this.origins.x,
            this.origins.y - this.posY * this.gap
        )

        const magnitude = (Math.sqrt(Math.pow(this.posX, 2) + Math.pow(this.posY, 2))).toFixed(1)

        ctx.fillStyle = 'lightblue'
        ctx.fillText(this.direction(this.posX, this.posY), this.coords.x + 5, this.coords.y - 35)
        ctx.fillText(`(${this.posX}; ${this.posY})`, this.coords.x + 5, this.coords.y - 5)
        ctx.fillText('mag: ' + magnitude, this.coords.x + 5, this.coords.y - 20)
    }
}

class Dot {
    constructor(x, y, color) {
        this.x = x
        this.y = y
        this.color = color

        ctx.fillStyle = 'red'
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, 2, 0, 2 * Math.PI)
        ctx.stroke()
    }
}

class Leg {
    constructor(x, y, z, p) {
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.strokeStyle = colors.gray
        ctx.lineWidth = 0.5
        ctx.lineTo(z, p)
        ctx.closePath()
        ctx.stroke()
    }
}