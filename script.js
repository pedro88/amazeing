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

const LEVEL_4 = [
    ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '.', 'S', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '.', '.', '.', '.', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '.', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*', '.', '.', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*', '.', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '.', '.', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '.', '.', '.', '*', '.', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '.', '.', '*', 'T', '*', '.', '.', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '.', '*', '.', '.', '.', '*', '.', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '.', '.', '.', '.', '.', '*', '.', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '.', '.', '*', '*', '.', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '.', '.', '.', '*', '.', '.', '.', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '.', '.', '.', '*', '.', '.', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '.', '.', '.', '.', '.', '.', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '.', '.', '*', '*', '.', '.', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*']
]
const main = document.querySelector("main")
const levelFlex = document.createElement("section")
levelFlex.classList.add("level")
main.appendChild(levelFlex)
let levelLibrairy = []
let actualLevel = 0
let finishExpansion = false
let c = 0
// import random from "./levelRandomizer.mjs"

// console.log(random)

//LEVEL GENERATOR

let newLevel = []
let lineIndex
let columnIndex
let lengthPath = 0
let direction
let lastDirection
let position
let initialLevedlGeneration = true
let translatedLevel = []

const variablesReinit = () => {
newLevel = []
lineIndex = 0
columnIndex = 0
lengthPath = 0
direction = 0
lastDirection = 0
position = 0
initialLevedlGeneration = true
translatedLevel = []
}

//Fonctionde radomisation
const randomizer = (nbr) => {
    return Math.round(Math.random() * nbr)
}

//Définition de la taille du niveau + création des bordures
const levelSizer = () => {
    newLevel = []
    const nbrColumn = randomizer(20) + 10
    const nbrLine = randomizer(20) + 10
    for (let i = 0; i < nbrLine; i++) {
        newLevel.push([])
        for (let j = 0; j < nbrColumn; j++) {
            newLevel[i].push(0)
        }
    }
    //Ajouter une bordure de valeur 5
    for (let i = 0; i < nbrColumn; i++) {
        newLevel[0].splice(i, 1, 5)
        newLevel[newLevel.length - 1].splice(i, 1, 5)
        newLevel[1].splice(i, 1, 5)
        newLevel[newLevel.length - 2].splice(i, 1, 5)
    }
    for (let i = 0; i < nbrLine; i++) {
        newLevel[i].splice(0, 1, 5)
        newLevel[i].splice(newLevel[i].length - 1, 1, 5)
        newLevel[i].splice(1, 1, 5)
        newLevel[i].splice(newLevel[i].length - 2, 1, 5)
    }
    return (newLevel)
}

//Définition du point de départ
const startRandomizer = () => {
    // Le départ ne peut jamis être sur a - de 3 cases du bord
    console.log("nbrCol: ", newLevel[0].length)
    const startColumn = randomizer(newLevel[0].length - 6) + 3
    console.log("nbrLine: ", newLevel.length)
    const startLine = randomizer(newLevel.length - 6) + 3
    console.log("startCol: ", startColumn)
    console.log("startLine: ", startLine)
    newLevel[startLine].splice(startColumn, 1, 2)
    console.log(newLevel)
    lineIndex = newLevel.findIndex((el) => el.find((ele) => ele === 2))
    columnIndex = newLevel[lineIndex].findIndex((el) => el === 2)
    return (newLevel)
}

//Test pour déterminer quel chemin choisir en fonction des cases alentours
const mainPathPicker = () => {
    //[*,*,*]
    //[*,A,*]
    //[*,*,*]
    //regle de base >>> un chemin ne eux jamais avoir plus de 5 tuiles adjacente (diagonale comprise) qui sont elle meme un chemin
    //On part du point A et on va calculer pour les 4 directions possibles la sommes des chemins adjacents (1 chemin = 1)
    //Ensuite on élimine les chemins qui ne répondent pas au critère de sélection ainsi que celui d'où vient le chemin
    //Enfin on détermine de manière aléatoire le chemin que l'on prend

    //Définition des différente direction possible à prendre
    position = [lineIndex, columnIndex]
    let upPossibility = [lineIndex - 1, columnIndex]
    let rightPossibility = [lineIndex, columnIndex + 1]
    let downPossibility = [lineIndex + 1, columnIndex]
    let leftPossibility = [lineIndex, columnIndex - 1]
    let checkPossibilityArray = [upPossibility, rightPossibility, downPossibility, leftPossibility]
    console.log("possibilityArray: ", checkPossibilityArray)
    //Calcul de la somme de toutes les cases adjacente à la case potentielle de destination
    for (let i = 3; i >= 0; i--) {
        let coordonate = checkPossibilityArray[i]
        // console.log("coordonate: ", coordonate)
        // console.log("test newLevel: ", newLevel[0][1])
        // console.log("valuer newlevel: ", newLevel[coordonate[0]][coordonate[1]])
        let PossibilitySum =
            newLevel[coordonate[0] - 1][coordonate[1] - 1] +
            newLevel[coordonate[0] - 1][coordonate[1]] +
            newLevel[coordonate[0] - 1][coordonate[1] + 1] +
            newLevel[coordonate[0]][coordonate[1] + 1] +
            newLevel[coordonate[0] + 1][coordonate[1] + 1] +
            newLevel[coordonate[0] + 1][coordonate[1]] +
            newLevel[coordonate[0] + 1][coordonate[1] - 1] +
            newLevel[coordonate[0]][coordonate[1] - 1]

        //Elimination des chemins surchargés
        PossibilitySum > 4 ||
        newLevel[coordonate[0]][coordonate[1]] === 1 ||
        newLevel[coordonate[0]][coordonate[1]] === 2 ||
        newLevel[coordonate[0]][coordonate[1]] === 5 ?
            checkPossibilityArray.splice(i, 1) : null

        if (checkPossibilityArray.length === 0) {
            newLevel[lineIndex].splice(columnIndex, 1, "T")
            initialLevedlGeneration = false
            break
        }
    }
    if (initialLevedlGeneration) {
        console.log("poss0: ", checkPossibilityArray[0])
        console.log("poss1: ", checkPossibilityArray[1])
        console.log("poss2: ", checkPossibilityArray[2])
        console.log("poss3: ", checkPossibilityArray[3])
        let directionPossibilityCount = checkPossibilityArray.length
        //Choix finale de la destination
        let positionRandomisation = randomizer(directionPossibilityCount - 1)
        let newPosition = checkPossibilityArray[positionRandomisation]
        console.log("newPosition: ", positionRandomisation)
        lineIndex = newPosition[0]
        columnIndex = newPosition[1]
        newLevel[lineIndex].splice(columnIndex, 1, 1)
    }
}

const pathGenerator = () => {
    console.log("line: ", lineIndex)
    console.log("colu: ", columnIndex)
    //Définition de la longueur du "chemin"
    lengthPath = randomizer(20) + 30
    console.log("length: ", lengthPath)
    //Création du chemin
    while (initialLevedlGeneration) {
        mainPathPicker()
        console.log(newLevel)
    }
}

//AJOUTER LEVEL CLEANER >>> laisser une bordure de 1 case maximum autour du niveau

const levelTranslator = () => {
    translatedLevel = []
    for (let i = 0; i < newLevel.length - 1; i++) {
        translatedLevel[i] =
            newLevel[i].map((e) => {
                switch (e) {
                    case (5):
                        e = "*"
                        return e
                        break
                    case (1):
                        e = "."
                        return e
                        break
                    case (2):
                        e = "S"
                        return e
                        break
                    case (0):
                        e = "*"
                        return e
                        break
                    case ("T"):
                        e = e
                        return e
                        break
                }
            })
    }
    return (translatedLevel)
}

const levelMaker = () => {
    variablesReinit()
    levelSizer()
    startRandomizer()
    pathGenerator()
    levelTranslator()
    return (translatedLevel)
}

let levelLibrairyGenerator = () => {
    for (let i = 0; i < 50; i++) {
        levelLibrairy.push(levelMaker())
    }
}

levelLibrairyGenerator()
console.log("librairie: ", levelLibrairy)






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
    await timeout(20)
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



