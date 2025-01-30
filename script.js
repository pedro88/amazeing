const LEVEL_1 = [
    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", ".", "*"],
    ["*", "S", ".", ".", ".", ".", ".", "*", "*", ".", "*", ".", "T"],
    ["*", "*", "*", "*", "*", ".", ".", ".", ".", ".", "*", ".", "*"],
    ["*", "*", "*", "*", "*", ".", "*", "*", "*", ".", "*", ".", "*"],
    ["*", "*", "*", "*", "*", ".", "*", "*", "*", "*", "*", ".", "*"],
    ["*", "*", "*", "*", "*", ".", "*", "*", "*", "*", "*", ".", "*"],
    ["*", "*", "*", "*", "*", ".", ".", ".", ".", ".", ".", ".", "*"],
    ["*", "*", "*", "*", "*", ".", "*", "*", "*", "*", "*", "*", "*"],
    ["*", ".", ".", ".", ".", ".", ".", ".", ".", ".", "*", "*", "*"],
    ["*", ".", "*", "*", "*", "*", "*", "*", ".", ".", ".", "*", "*"],
    ["*", ".", ".", ".", ".", "*", "*", "*", "*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"]
]

const LEVEL_2 = [
    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
    ["*", ".", ".", "S", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "*"],
    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", ".", "*"],
    ["*", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "*"],
    ["*", ".", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
    ["*", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "T"],
    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"]
]

const LEVEL_3 = [
    ["*", "*", "*", "*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "S", "*", "*", "*"],
    ["*", "*", "*", "*", ".", "*", "*", "*"],
    ["*", "*", "*", "*", ".", "*", "*", "*"],
    ["*", "*", "*", "*", ".", "*", "*", "*"],
    ["*", ".", ".", ".", ".", ".", ".", "*"],
    ["*", ".", "*", "*", "*", "*", ".", "*"],
    ["*", ".", ".", "*", "*", "*", ".", "*"],
    ["*", ".", ".", "*", "*", "*", ".", "*"],
    ["*", "*", ".", "*", "*", "*", "*", "*"],
    ["*", "T", ".", "*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*", "*", "*", "*"]
]
const main = document.querySelector("main")
const levelFlex = document.createElement("section")
levelFlex.classList.add("level")
main.appendChild(levelFlex)
let levelLibrairy = [LEVEL_1, LEVEL_2, LEVEL_3]
let actualLevel = 0
let finishExpansion = false
let c = 0
// import random from "./levelRandomizer.mjs"

// console.log(random)

const timeout = (time) => {
    return new Promise((res) => {
        setTimeout(() => res(null), time)
    })
}

const expansionBack = async () => {
    const divs = document.querySelectorAll("div")
    for (let div of divs) {
        div.style.margin = "100px"
        let newMargin
        let j = 0
        let interval = setInterval(() => {
            for (let i = 0; i < 10; i++) {
                newMargin = div.style.margin.replace("px", "")
                newMargin = Number(newMargin)
                newMargin -= Number(1)
                div.style.margin = newMargin + "px"
            }
            j += 1
            j === 10 ? clearInterval(interval) : null
        }, 50)
    }
}


const expansion = async () => {

    const divs = document.querySelectorAll("div")
    for (let div of divs) {
        div.style.margin = "0px"
        let newMargin
        let j = 0

        let interval = setInterval(() => {
            for (let i = 0; i < 10; i++) {
                newMargin = div.style.margin.replace("px", "")
                newMargin = Number(newMargin)
                newMargin += Number(1)
                div.style.margin = newMargin + "px"
            }
            j += 1
            j === 10 ? clearInterval(interval) : null
        }, 50)
    }
    for (let div of divs) {
        div.remove()
    }
    c += 1
    console.log("expanse???")
    if (c === divs.length) {
        finishExpansion = true
        console.log("expanse done")
    }
}

const transition = async () => {

    await expansion()
    await timeout(2000)
    actualLevel += 1
    levelBuilder()
    expansionBack()
    perso = document.querySelector(".perso")

}

const loop = (c) => {
    console.log("c: ", c)
    loop(c)
}


console.log(levelLibrairy[1])

const levelBuilder = () => {
    for (let i = 10; i < levelLibrairy[actualLevel].length + 10; i++) {
        const newLevelLine = document.createElement("section")
        newLevelLine.classList.add("levelLine")
        levelFlex.appendChild(newLevelLine)
        for (let j = 10; j < levelLibrairy[actualLevel][i - 10].length + 10; j++) {
            const value = levelLibrairy[actualLevel][i - 10][j - 10]
            switch (value) {
                case ("*"):
                    const newWallTile = document.createElement("div")
                    newWallTile.classList.add("wall", `line${i}-column${j}`)
                    newLevelLine.appendChild(newWallTile)
                    break;
                case ("."):
                    const newPathTile = document.createElement("div")
                    newPathTile.classList.add("path", `line${i}-column${j}`)
                    newLevelLine.appendChild(newPathTile)
                    break;
                case ("S"):
                    const newStartTile = document.createElement("div")
                    newStartTile.classList.add("start", `line${i}-column${j}`)
                    newLevelLine.appendChild(newStartTile)
                    const perso = document.createElement("div")
                    perso.classList.add("perso")
                    newStartTile.appendChild(perso)
                    break;
                case ("T"):
                    const newTreasureTile = document.createElement("div")
                    newTreasureTile.classList.add("treasure", `line${i}-column${j}`)
                    newLevelLine.appendChild(newTreasureTile)
                    break;
            }
        }
    }
}

levelBuilder()

const checkPosition = () => {
    const perso = document.querySelector(".perso")
    const position = perso.parentElement.classList
    const columnPos = position[1].substring(position[1].length - 2, position[1].length)
    const linePos = position[1].substring(4, 6)
    console.log("col: ", columnPos)
    console.log("line: ", linePos)
    actualPosition = [linePos, columnPos]
}

const checkEndOfLevel = () => {
    const perso = document.querySelector(".perso")
    const position = perso.parentElement.classList
    if (position[0] === "treasure") {
        transition()
    }
}


let actualPosition = [0, 0]
let newPosition
let freeWay = true
let perso = document.querySelector(".perso")

const checkCollision = () => {
    if (newPosition.classList[0] === "wall") {
        freeWay = false
        console.log("Bump")
    } else {
        freeWay = true
        console.log("Hop")
    }
}

const movingRight = () => {
    checkPosition()
    const newColumnPos = +actualPosition[1] + 1
    newPosition = document.querySelector(`.line${actualPosition[0]}-column${newColumnPos}`)
    checkCollision()
    if (freeWay === true) {
        newPosition.appendChild(perso)
        checkEndOfLevel()
    }
}
const movingLeft = () => {
    checkPosition()
    const newColumnPos = +actualPosition[1] - 1
    newPosition = document.querySelector(`.line${actualPosition[0]}-column${newColumnPos}`)
    checkCollision()
    if (freeWay === true) {
        newPosition.appendChild(perso)
        checkEndOfLevel()
    }
}
const movingUp = () => {
    checkPosition()
    const newLinePos = +actualPosition[0] - 1
    newPosition = document.querySelector(`.line${newLinePos}-column${actualPosition[1]}`)
    checkCollision()
    if (freeWay === true) {
        newPosition.appendChild(perso)
        checkEndOfLevel()
    }
}
const movingDown = () => {
    checkPosition()
    const newLinePos = +actualPosition[0] + 1
    newPosition = document.querySelector(`.line${newLinePos}-column${actualPosition[1]}`)
    checkCollision()
    if (freeWay === true) {
        newPosition.appendChild(perso)
        checkEndOfLevel()
    }
}



document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case ("ArrowRight"):
            movingRight()
            break
        case ("ArrowLeft"):
            movingLeft()
            break
        case ("ArrowUp"):
            movingUp()
            break
        case ("ArrowDown"):
            movingDown()
            break
    }
})



let newLevel = []

const randomizer = (nbr) => {
    return Math.round(Math.random()*nbr)
}

const levelSizer = () => {
    const nbrColumn = randomizer(20)+5
    const nbrLine = randomizer(20)+5
    for (let i = 0; i < nbrLine; i++){
        newLevel.push([])
        for (let j = 0; j < nbrColumn; j++) {
            newLevel[i].push("*")
        }
    }    
    return(newLevel)
}

const startRandomizer = () => {
    const startColumn = randomizer(newLevel[0].length)
    const startLine = randomizer(newLevel.length)
    console.log(startColumn)
    newLevel[startLine].splice(startColumn, 1, "S")
    console.log(newLevel)
    return(newLevel)
}

const pathGenerator = () => {
// 1 = up
// 2 = right
// 3 = down
// 4 = left

const lineIndex = newLevel.findIndex((el) => el.find((ele) => ele === "S"))
const columnIndex = newLevel[lineIndex].findIndex((el) => el === "S")
// newLevel.find((el) => el === "S")
console.log("line: ", lineIndex)
console.log("colu: ", columnIndex)

const firstStep = {
    
}
}

levelSizer()
startRandomizer()
pathGenerator()