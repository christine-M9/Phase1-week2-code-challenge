
document.addEventListener('DOMContentLoaded', ()=>{

 fetchcharacters()
})

const url = "http://localhost:3000/characters"

function displayCharacters(charact){

    const character = document.getElementById('characters')
   const container = document.createElement("div")
   container.className = "container"
   container.innerHTML = `
   <div>
   <h2>${charact.name}</h2>
   <img src = ${charact.image}/>
   <p>${charact.votes}</p>
   </div>
   
 
  `
  character.appendChild(container)
}

function fetchcharacters(){

    fetch(url) .then(res => res.json()) 
    .then(charData =>charData.forEach(chard => displayCharacters(chard)))

}