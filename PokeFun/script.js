const pokeInfo = document.getElementById("pokeDetails");
const pokePic = document.getElementById("myImg");

const HIGHEST_POKEDEX_NUM = 1025;

const user_pokemon = ["", "", "", "", "", ""];


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

async function getNewPokemon(pkmn) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pkmn}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function pokemonGenerator() {
    let randomPokemonNum = getRandomInt(HIGHEST_POKEDEX_NUM);
    randPokemon = await getNewPokemon(randomPokemonNum);
    return randPokemon;
}

async function getPokemon(pkmn) {
    if(pkmn > HIGHEST_POKEDEX_NUM) {
        pokePic.style.display = "none";
        pokeInfo.innerText = "There are not that many known pokemon";
    } else {
        const data = await getNewPokemon(pkmn);

        const pokeImgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`

        pokeInfo.innerText = `${data.name}`;

        pokePic.style.display = "block";
        pokePic.src = pokeImgURL;

        const rPoke = await pokemonGenerator();

        console.log(rPoke.name);
    }
}