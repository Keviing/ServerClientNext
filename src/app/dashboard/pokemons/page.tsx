//Colocamos la peticion a la api 

import { PokemonGrid, PokemonsResponse, SimplePokemons } from "@/pokemons";



const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemons[]> => {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(res => res.json());


  const pokemons = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name
  }));

  // throw new Error('Error de prueba');
  return pokemons;


}


export default async function page() {
  const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Listado Pokemons <small>Estatico</small></span>
        <PokemonGrid pokemons={pokemons} />
    </div>
  )
}
