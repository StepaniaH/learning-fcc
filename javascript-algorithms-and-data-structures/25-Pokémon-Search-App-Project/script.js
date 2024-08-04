const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const result = document.getElementById("result");

searchButton.addEventListener("click", searchPokemon);

async function searchPokemon() {
  const searchTerm = searchInput.value.toLowerCase();

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${searchTerm}`
    );
    if (!response.ok) {
      throw new Error("Pokémon not found");
    }
    const data = await response.json();
    displayPokemonInfo(data);
  } catch (error) {
    alert(error.message);
  }
}

function displayPokemonInfo(pokemon) {
  document.getElementById("pokemon-name").textContent =
    pokemon.name.toUpperCase();
  document.getElementById("pokemon-id").textContent = `#${pokemon.id}`;
  document.getElementById("weight").textContent = `Weight: ${pokemon.weight}`;
  document.getElementById("height").textContent = `Height: ${pokemon.height}`;
  document.getElementById("hp").textContent = pokemon.stats.find(
    (stat) => stat.stat.name === "hp"
  ).base_stat;
  document.getElementById("attack").textContent = pokemon.stats.find(
    (stat) => stat.stat.name === "attack"
  ).base_stat;
  document.getElementById("defense").textContent = pokemon.stats.find(
    (stat) => stat.stat.name === "defense"
  ).base_stat;
  document.getElementById("special-attack").textContent = pokemon.stats.find(
    (stat) => stat.stat.name === "special-attack"
  ).base_stat;
  document.getElementById("special-defense").textContent = pokemon.stats.find(
    (stat) => stat.stat.name === "special-defense"
  ).base_stat;
  document.getElementById("speed").textContent = pokemon.stats.find(
    (stat) => stat.stat.name === "speed"
  ).base_stat;

  const typesElement = document.getElementById("types");
  typesElement.innerHTML = "";
  pokemon.types.forEach((type) => {
    const typeElement = document.createElement("span");
    typeElement.textContent = type.type.name.toUpperCase();
    typesElement.appendChild(typeElement);
  });

  const spriteElement = document.getElementById("sprite");
  spriteElement.src = pokemon.sprites.front_default;

  result.style.display = "block";
}
