
const wrapper = document.getElementById("stagger")
const title = document.getElementById("title")
const tileDimension = 100

let columns = Math.floor(document.body.clientWidth / tileDimension)
let rows = Math.floor(document.body.clientHeight / tileDimension)

const colors = [
    "#343434",
    "#121212"
]

let toggled = false

const handleOnClick = (index) => {
    toggled = !toggled

    if (!toggled) {
        title.classList.add("toggled")
    } else {
        title.classList.remove("toggled")
    }

    anime({
        targets: ".tile",
        opacity: toggled ? 1 : 0,
        delay: anime.stagger(50, {
            grid: [columns, rows],
            from: index
        })
    })
}

const createTile = (index) => {
    const tile = document.createElement("div")
    tile.classList.add("tile")
    tile.onclick = (e) => handleOnClick(index)
    return tile
}

const createTiles = (quantity) => {
    Array.from(Array(quantity)).map((tile, index) => {
        wrapper.appendChild(createTile(index))
    })
}

const createGrid = () => {
    wrapper.innerHTML = ""

    columns = Math.floor(document.body.clientWidth / tileDimension)
    rows = Math.floor(document.body.clientHeight / tileDimension)

    wrapper.style.setProperty("--columns", columns)
    wrapper.style.setProperty("--rows", rows)

    createTiles(columns * rows)
}

createGrid()

window.onresize = () => createGrid()
console.log("Hello world")