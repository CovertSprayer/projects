const btn = document.querySelector('button');
const main = document.querySelector('main');
const txtColor = document.querySelector('.txt-col')

const colors = ['red', 'green', 'blue', 'orange', 'teal']
// const haxColors = []
// rgb(0-256, 0-256, 0-256)

btn.addEventListener('click', (e)=>{
    const bgCol = getColor();
    main.style.backgroundColor = bgCol; 
    txtColor.innerText = bgCol;
})

function getColor(){
    const ind = Math.floor(Math.random()*10) % colors.length;
    return colors[ind];
}