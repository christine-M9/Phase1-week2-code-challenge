document.addEventListener("DOMContentLoaded", () => {
  fetchcharacters();
});


const url = "http://localhost:3000/characters";



function displayCharacters(charact) {
  const character = document.getElementById("characters");
  const container = document.createElement("div");
  container.className = "container";
  container.innerHTML = `
      <div class="charact-card">
      <a class = "name">${charact.name}</a>
      </div>
      
     `;

  const btn = document.querySelector(".btn");

  btn.style.display = "none";

  container.querySelector(".name").addEventListener("click", () => {
    displayCharactersById(charact.id);
    btn.style.display = "block";
  });


  character.appendChild(container);
}

function displayCharactersById(id) {
  fetch(`${url}/${id}`)
    .then((res) => res.json())
    .then((char) => {
      characterDetail(char);
    });
}


function characterDetail(char) {
  let vote = 0;

  const name = document.querySelector(".name-c");
  const image = document.querySelector(".img-c");
  const counter = document.querySelector(".vote");
  const btn = document.querySelector(".btn");

  name.textContent = char.name;
  image.setAttribute("src", char.image);
  counter.textContent = vote;

  btn.addEventListener("click", () => {
    vote++;
    counter.textContent = vote;
  });
}



function fetchcharacters() {
  fetch(url)
    .then((res) => res.json())
    .then((charData) => charData.forEach((chard) => displayCharacters(chard)));
}

