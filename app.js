let body = document.querySelector('body');
let h2 = document.createElement('h2');
let img = document.createElement('img');
const pokemonContainer = document.querySelector(".pokemon-container");
const formEl = document.querySelector("form");
const inputEl = document.querySelector("input[type=text]");
body.appendChild(h2);


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


formEl.addEventListener("click", function(event) {
  event.preventDefault();
  pokemonContainer.innerHTML = "";
  getPokemon(inputEl.value);
});


async function getPokemon(name = "") {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const pokemon = await res.json();
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");
   

  pokemonEl.innerHTML = ` 
    <div class="thefront">
        <img src="https://res.cloudinary.com/lmn/image/upload/c_limit,h_360,w_640/e_sharpen:100/f_auto,fl_lossy,q_auto/v1/gameskinnyc/a/6/0/a6078c-2fd9033b2be04c9b947d1aac6cdaef60-a2551.gif" width="250"</img>
         <h2>${pokemon.name}</h2>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          pokemon.id}.png" width="200">
    </div>
 
 
   <div class="theback">
        <img src="https://res.cloudinary.com/lmn/image/upload/c_limit,h_360,w_640/e_sharpen:100/f_auto,fl_lossy,q_auto/v1/gameskinnyc/a/6/0/a6078c-2fd9033b2be04c9b947d1aac6cdaef60-a2551.gif" width="250"</img>
        ${pokemon.stats
       .map((stat) => {
        return `<p>${stat.stat.name}: ${stat.base_stat}</p>`;
        })
       .join("")}
    </div>

  `;

  pokemonContainer.appendChild(pokemonEl);
}


getPokemon();


