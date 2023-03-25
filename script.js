function toggleDraw() {
    drawOn = !drawOn;
    if (useBlack) {penColor = "#3b393a";}
    if (usePink) {penColor = getPink();}
    if (useEraser) {penColor = "#F5F5F5";}
    if (drawOn) 
    {
        if (useShader) {penColor = getShader(this.style.backgroundColor)}
        this.style.backgroundColor = penColor;
    }
}

function draw(){
    if (useBlack) {penColor = "#3b393a";}
    if (usePink) {penColor = getPink();}
    if (useEraser) {penColor = "#F5F5F5";}
    if (drawOn) 
    {
        if (useShader) {penColor = getShader(this.style.backgroundColor)}
        this.style.backgroundColor = penColor;
    }
}

function newGrid() {
    let input = document.querySelector("#numCells");
    if (input.value > 0 && input.value <= 100)
    {
        numCells = input.value;
        removeCells();
        drawGrid();
    }
    else{
        window.alert("Please enter a number between 1 and 100");
    }
}

function removeCells()
{
    let cells = document.querySelectorAll(".Cells");
    if (cells.length == 0) return;
    cells.forEach(element => {
        let container = document.querySelector(".divContainer"); 
        container.removeChild(element);      
    });
}

function enableBlack() {
    useBlack = true; 
    usePink = false;
    useShader =  false;
    useEraser =  false;
}

function getPink()
{
    let max = pinkArray.length;
    let i= Math.floor(Math.random() * max);
    return pinkArray[i];

}

function enablePink(){
   usePink = true;
   useBlack = false;
   useShader = false;
   useEraser = false;
}

function getShader(cellColor){

    cellColor = cellColor[3] == 'a' ?  cellColor.slice(5,-1): cellColor.slice(4,-1) ;
    let colors = cellColor.split(",");
    let red     = Math.floor(parseInt(colors[0]) - (245/10)); if (red <  0)     red = 0;
    let green   = Math.floor(parseInt(colors[1]) - (245/10)); if (green < 0)  green = 0;
    let blue    = Math.floor(parseInt(colors[2]) - (245/10)); if (blue < 0)    blue = 0;

    let sRed = red.toString(16); if(sRed.length == 1) { sRed = "0" + sRed}
    let sGreen = green.toString(16); if (sGreen.length == 1) {sGreen = "0" + sGreen}
    let sBlue  = blue.toString(16); if (sBlue.length == 1) {sBlue = "0" + sBlue}

    let shader = "#" + sRed + sGreen + sBlue;;
    return shader;
}

function enableShader(){
    useShader = true;
    useBlack = false; 
    usePink = false;
    useEraser = false; 
};

function enableEraser() {
    useBlack = false;
    usePink = false;
    useShader = false;
    useEraser =  true;
}

function clearCells() {
    let cells = document.querySelectorAll(".Cells");
    if (cells.length == 0) return;
    cells.forEach(element => {
        element.style.backgroundColor = "#F5F5F5";
    })
}

function drawGrid() {
let grid = document.querySelector('.divContainer');
grid.style.gridTemplateColumns = `repeat(${numCells}, 2fr)`;
grid.style.gridTemplateRows = `repeat(${numCells}, 2fr)`;
for (let i =0; i < numCells * numCells; i++)
{
    let div = document.createElement('div');
    div.className = "Cells";
    div.style.border = "1px solid #808080";
    div.style.backgroundColor =  "#F5F5F5";

    div.addEventListener("click", toggleDraw);
    div.addEventListener("mouseover", draw);
 
    grid.appendChild(div);
}
}



let drawOn = false;
let penColor = "#3b393a";
numCells = 16;

let useBlack = false;

let pinkArray = ["#cf8ab0", "#c7a3b7", "#e88bbf", "#8f687c", "#a35880", "#d9c1ce", "#e69ac3"] ;
let usePink = false;

let useShader = false;

let useEraser = false;

drawGrid();

let submit = document.querySelector("#submitNumCells");
submit.addEventListener("click", newGrid);

let black = document.querySelector(".Black");
black.addEventListener("click", enableBlack);

let pink = document.querySelector(".Pink");
pink.addEventListener("click", enablePink);

let shader = document.querySelector(".Shader");
shader.addEventListener("click", enableShader);

let eraser = document.querySelector(".Eraser");
eraser.addEventListener("click", enableEraser);

let clear = document.querySelector(".Clear");
clear.addEventListener("click", clearCells);

