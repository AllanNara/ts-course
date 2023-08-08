import { getPokemon } from "./generics/get-pokemons";

getPokemon(2)
	.then(pokemon => console.log(pokemon.sprites.front_default))
	.catch(err => console.log(err))
	.finally(() => console.log("Final")); 
