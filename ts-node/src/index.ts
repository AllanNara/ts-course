import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon("Charmander");

// (Pokemon.prototype as any).customName = "Pikachu"

// console.log(charmander.savePokemonToDB(-3));
// console.log(charmander.savePokemonToDB(3));
// console.log(charmander.savePokemonToDB(900));
// charmander.publicApi
charmander.publicApi = "otra cosa"
console.log({indexPokemon:charmander});
console.log({indexPublicApi:charmander.publicApi});
