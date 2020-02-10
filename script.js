const pokemonData = require('./data/pokemon');
const images = {
  bug:'./data/power/bug.png',
  dark:'./data/power/dark.png',
  dragon:'./data/power/dragon.png',
  electric:'./data/power/electric.png',
  fairy:'./data/power/fairy.png',
  fighting:'./data/power/fighting.png',
  fire:'./data/power/fire.png',
  flying:'./data/power/flying.png',
  ghost:'./data/power/ghost.png',
  grass:'./data/power/grass.png',
  ground:'./data/power/ground.png',
  ice:'./data/power/ice.png',
  normal:'./data/power/normal.png',
  poison:'./data/power/poison.png',
  psychic:'./data/power/psychic.png',
  rock:'./data/power/rock.png',
  steel:'./data/power/steel.png',
  water:'./data/power/water.png'
};

const giveData = function() {
  let parsedData = '';
  pokemonData.forEach(pokemon => {
    parsedData += `<div id="${pokemon["pkdx_id"]}" class="pokemon" onclick='giveImage(this)>
    <div class="front">
      <p class="pokemonName">${pokemon.name}</p>
      <img
        src="${pokemon.art_url}"
      />
      <div style='display: flex; justify-content: space-evenly;'>
      <img src="${}" height='45px' width='auto' />
      <img src="${}" height='45px' width='auto' />
    </div>
    </div>
    <div class="back">
      <p class="description">
      ${pokemon.description
        .split('.')
        .slice(0, 3)
        .join('.')}
      </p>
    </div>
  </div>`;
  });
  return parsedData;
};

console.log(giveData());
