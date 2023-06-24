
document.addEventListener('DOMContentLoaded', ()=>{

 fetchcharacters()
})

const url = "http://localhost:3000/characters"

function displayCharacters(){
    const character = document.getElementById('characters')

}

function fetchcharacters(){

    fetch(url) .then(res => res.json()) 
    .then(charData =>charData.forEach(chard => console.log(chard)))

}