const ls = window.localStorage

if(!getValue('last_index')) ls.setItem('last_index', 0)

console.log(getValue('last_index'))

function saveItem(data) {
    const index = getValue('last_index')

    ls.setItem(`Vector${index}`, `${data.x}/${data.y}`)
    ls.setItem('last_index', Number(index) + 1)
}

function wipeLocalStorage() {
    ls.clear()
}

function getValue(key) {
    for(let i = 0; i < ls.length; i++) {
        if(ls.key(i) === key) return ls.getItem(key)
    }   
}

function loadPreviousWork() {
    for(let i = 0; i < ls.length; i++) {
        if(ls.key(i).startsWith('Vector')) {
            const coords = {
                x: ls.getItem(ls.key(i)).split('/')[0],
                y: ls.getItem(ls.key(i)).split('/')[1]
            }
            
            new Vector(coords.x, coords.y).render()
            console.log()
        }
    }
}

loadPreviousWork()