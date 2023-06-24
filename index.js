
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
   <h2 id = "name">${charact.name}</h2>
   <img src = ${charact.image}/>
   <p>${charact.votes}</p>
   </div>
   
  `
  container.querySelector("#name").addEventListener('click',()=>{
displayCharactersById(charact.id)
console.log(charact.id)
  })

  character.appendChild(container)
}
function displayCharactersById(id){
    fetch(`${url}/${id}`) .then(res => res.json()) 
    .then(charId =>charId.forEach(id => displayCharacters(id)))
  

}
function fetchcharacters(){

    fetch(url) .then(res => res.json()) 
    .then(charData =>charData.forEach(chard => displayCharacters(chard)))

}