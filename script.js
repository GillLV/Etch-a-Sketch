function toggleDraw() {
    drawOn = !drawOn;
    if (drawOn) 
    {
        this.style.backgroundColor = "black";
    }
}

function draw(){
    if (drawOn) 
    {
        this.style.backgroundColor = "black";
    }
}

let drawOn = false;
let penColor = 0x000000;
const divArray = [];
numDiv = 256;

for (let i =0; i < numDiv; i++)
{
    let div = document.createElement('div');
    div.className = "cells";
    div.style.minHeight = "38px"
    div.style.width = "38px";
    div.style.border = "1px solid #808080";
    div.style.margin = "0px";
    div.style.padding = "0px";

    divArray.push(div);

    let container = document.querySelector('.divContainer');
    container.appendChild(div);
}

divArray.forEach(element => {element.addEventListener("click", toggleDraw)}); 
divArray.forEach(element => {element.addEventListener("mouseover", draw)})
