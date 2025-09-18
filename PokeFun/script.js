const pokeInfo = document.getElementById("pokeDetails");
const pokePic = document.getElementById("myImg");

const HIGHEST_POKEDEX_NUM = 1025;

async function getPokemon(pkmn) {
    if(pkmn > HIGHEST_POKEDEX_NUM) {
        pokePic.style.display = "none";
        pokeInfo.innerText = "There are not that many known pokemon";
    } else {
        const url = `https://pokeapi.co/api/v2/pokemon/${pkmn}`;

        const response = await fetch(url);
        const data = await response.json();

        const pokeImgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`

        console.log(data);
        pokeInfo.innerText = `${data.name}`;

        pokePic.style.display = "block";
        pokePic.src = pokeImgURL;
    }
}