const pokeInfo = document.getElementById("pokeDetails");
const pokePic = document.getElementById("myImg");

const pos1 = document.getElementById("space_1");
const pos2 = document.getElementById("space_2");
const pos3 = document.getElementById("space_3");
const pos4 = document.getElementById("space_4");
const pos5 = document.getElementById("space_5");
const pos6 = document.getElementById("space_6");
const position_array = [pos1, pos2, pos3, pos4, pos5, pos6];

const MAX_LEN_POKEMON = 6;
const HIGHEST_POKEDEX_NUM = 1025;

let rPoke = "";

class pokemon {
    constructor(name, picture, mv1, mv2,) {
        this.name = name;
        this.picture = picture;
        this.mv1 = mv1;
        this.mv2 = mv2;
    }
}

// make an object for the PokeDisplay, so you can just pass in data 
// to the PokeDisplay and it'll populate all of the details

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

        // this is gets you your first 3 pokemon
        for (let i = 0; i < (MAX_LEN_POKEMON / 2); i++) {

            rPoke = await pokemonGenerator();

            let move1 = rPoke.moves[getRandomInt(30)];
            let move2 = rPoke.moves[getRandomInt(30)];
            let image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${rPoke.id}.png`;
            
            let newMon = new pokemon(rPoke.name, image, move1, move2);
            user_pokemon[i] = newMon;
        }

        for(let i = 0; i < MAX_LEN_POKEMON; i++) {
            if(user_pokemon[i] == "") {
                continue;
            }
            position_array[i].style.display = "block";
            position_array[i].src = user_pokemon[i].picture;
        }

        //console.log(user_pokemon);
        console.log(data.moves[0]);
    }
}