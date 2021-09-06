import * as React from 'react'
import * as PIXI from 'pixi.js'
import styled from 'styled-components'

const MazeBackground = styled.div`
    position: fixed;
`

export default class Maze extends React.Component {

    constructor(props) {
        super(props)

        this.app = new PIXI.Application({
            resizeTo: window,
            backgroundColor: 0xcae3eb,
            resolution: window.devicePixelRatio || 1,
        });

        this.graphics = new PIXI.Graphics();
        this.diameter = 2 //TODO Make this a function of window size
        this.toVisit = new Set()
        this.itrsPerFrame = 30
        this.cells = []
    }

    render() {
        return <MazeBackground id='pixi-canvas'></MazeBackground>
    }

    componentDidMount() {
        document.getElementById('pixi-canvas').appendChild(this.app.view)
        this.app.stage.addChild(this.graphics)
        this.graphics.lineStyle({ width: this.diameter, color: 0xF5F5F5, cap: PIXI.LINE_CAP.SQUARE })
        this.drawMaze()
    }

    drawMaze = () => {
        const width = this.app.screen.width / this.diameter
        const height = this.app.screen.height / this.diameter

        const initX = Math.floor(Math.random() * width / 4)
        const initY = Math.floor(Math.random() * height / 4)

        this.cells = this.initializeVisited(width, height)
        this.cells[initY][initX].visited = true

        this.addNeighbors(this.cells[initY][initX])
        this.animate()
    }

    animate = () => {
        requestAnimationFrame(this.animate)
        for (let i = 0; i < this.itrsPerFrame; i++) {
            if (this.toVisit.size) {
                const next = this.getRandom(this.toVisit)
                this.toVisit.delete(next)
                next.visited = true
                this.addNeighbors(next)
                this.connectCell(next)
            }
        }
    }

    initializeVisited = (w, h) => {
        const ar = []
        for (let i = 0; i < h; i++) {
            const row = []
            for (let j = 0; j < w; j++) {
                row.push({ visited: false, x: j, y: i })
            }
            ar.push(row)
        }
        return ar
    }

    getRandom = (s) => {
        const idx = Math.floor(Math.random() * s.size)
        let count = 0
        for (let e of s) {
            if (count++ == idx) {
                return e
            }
        }
    }

    addNeighbors = (cell) => {
        if (cell.x > 0) {
            this.addIfUnvisited(this.cells[cell.y][cell.x - 1])
        }
        if (cell.x < this.cells[0].length - 1) {
            this.addIfUnvisited(this.cells[cell.y][cell.x + 1])
        }
        if (cell.y > 0) {
            this.addIfUnvisited(this.cells[cell.y - 1][cell.x])
        }
        if (cell.y < this.cells.length - 1) {
            this.addIfUnvisited(this.cells[cell.y + 1][cell.x])
        }
    }

    addIfUnvisited = (cell) => {
        if (!cell.visited) {
            this.toVisit.add(cell)
        }
    }

    pushIfVisited = (cell, curList) => {
        if (cell.visited) {
            curList.push(cell)
        }
    }

    connectCell = (cell) => {
        const connectionChoices = []
        if (cell.x > 0) {
            this.pushIfVisited(this.cells[cell.y][cell.x - 1], connectionChoices)
        }
        if (cell.x < this.cells[0].length - 1) {
            this.pushIfVisited(this.cells[cell.y][cell.x + 1], connectionChoices)
        }
        if (cell.y > 0) {
            this.pushIfVisited(this.cells[cell.y - 1][cell.x], connectionChoices)
        }
        if (cell.y < this.cells.length - 1) {
            this.pushIfVisited(this.cells[cell.y + 1][cell.x], connectionChoices)
        }
        const cellToConnect = connectionChoices[Math.floor(Math.random() * connectionChoices.length)]
        this.drawConnection(cell, cellToConnect)
    }

    drawConnection = (cellA, cellB) => {
        this.graphics.moveTo(cellA.x * this.diameter * 2, cellA.y * this.diameter * 2)
        this.graphics.lineTo(cellB.x * this.diameter * 2, cellB.y * this.diameter * 2)
    }
}