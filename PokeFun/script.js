const api_key = "";
const pokeInfo = document.getElementById("pokeDetails");

async function getPokemon(pkmn) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pkmn}`;

    const response = await fetch(url);
    const data = await response.json();

    pokeInfo.innerText = `${data.name}`;
}