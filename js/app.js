const app = new PIXI.Application({
    resizeTo: window, backgroundColor: 0xcae3eb, resolution: window.devicePixelRatio || 1,
});

const graphics = new PIXI.Graphics();
app.stage.addChild(graphics)
graphics.lineStyle({ width: 2, color: 0xF5F5F5, cap: PIXI.LINE_CAP.SQUARE })

const diameter = 2

const width = app.screen.width / diameter
const height = app.screen.height / diameter


const toVisit = new Set()
const itrsPerFrame = 30

// TODO randomize initial value
const initX = Math.floor(Math.random() * width / 4)
const initY = Math.floor(Math.random() * height / 4)
const cells = initializeVisited(width, height)
console.log(cells)
cells[initY][initX].visited = true
addNeighbors(cells[initY][initX])

const ticker = PIXI.Ticker.shared
ticker.stop();
ticker.add(function () {
    for (let i = 0; i < itrsPerFrame; i++) {
        if (toVisit.size) {
            const next = getRandom(toVisit)
            toVisit.delete(next)
            next.visited = true
            addNeighbors(next)
            connectCell(next)
        }
    }
});
ticker.start();

function initializeVisited(w, h) {
    ar = []
    for (let i = 0; i < h; i++) {
        const row = []
        for (let j = 0; j < w; j++) {
            row.push({ visited: false, x: j, y: i })
        }
        ar.push(row)
    }
    return ar
}

function getRandom(s) {
    const idx = Math.floor(Math.random() * s.size)
    let count = 0
    for (let e of s) {
        if (count++ == idx) {
            return e
        }
    }
}

function addNeighbors(cell) {
    if (cell.x > 0) {
        addIfUnvisited(cells[cell.y][cell.x - 1])
    }
    if (cell.x < cells[0].length - 1) {
        addIfUnvisited(cells[cell.y][cell.x + 1])
    }
    if (cell.y > 0) {
        addIfUnvisited(cells[cell.y - 1][cell.x])
    }
    if (cell.y < cells.length - 1) {
        addIfUnvisited(cells[cell.y + 1][cell.x])
    }
}

function addIfUnvisited(cell) {
    if (cell.visited === false) {
        toVisit.add(cell)
    }
}

function pushIfVisited(cell, curList) {
    if (cell.visited === true) {
        curList.push(cell)
    }
}

function connectCell(cell) {
    const connectionChoices = []
    if (cell.x > 0) {
        pushIfVisited(cells[cell.y][cell.x - 1], connectionChoices)
    }
    if (cell.x < cells[0].length - 1) {
        pushIfVisited(cells[cell.y][cell.x + 1], connectionChoices)
    }
    if (cell.y > 0) {
        pushIfVisited(cells[cell.y - 1][cell.x], connectionChoices)
    }
    if (cell.y < cells.length - 1) {
        pushIfVisited(cells[cell.y + 1][cell.x], connectionChoices)
    }
    const cellToConnect = connectionChoices[Math.floor(Math.random() * connectionChoices.length)]
    drawConnection(cell, cellToConnect)
}

function drawConnection(cellA, cellB) {

    graphics.moveTo(cellA.x * diameter * 2, cellA.y * diameter * 2)
    graphics.lineTo(cellB.x * diameter * 2, cellB.y * diameter * 2)
}
app.view.style.position = 'fixed'
document.body.appendChild(app.view);