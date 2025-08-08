//Colocamos la peticion a la api 

import { PokemonGrid, PokemonsResponse, SimplePokemons } from "@/pokemons";

 export const metadata = {
  title: 'Pokemons Favoritos',
  description: 'ajsjdkslsapos'
}

export default async function page() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Pokemons Favorites <small>Global State</small></span>
        <PokemonGrid pokemons={[]} />
    </div>
  )
}
