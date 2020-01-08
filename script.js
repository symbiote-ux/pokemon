const parsedData = require('./data/pokemon');
let string = '';
parsedData.forEach(pokemon => {
  string += `<div class="pokemon">
  <p class="pokemonName">${pokemon.name}</p>
  <img
    src="${pokemon.art_url}"
  />
  <p class="description">
    ${pokemon.description
      .split('.')
      .slice(0, 2)
      .join('.')}
  </p>
</div>`;
});
console.log(string);
