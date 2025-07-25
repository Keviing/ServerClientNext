import { SimplePokemons } from "../interfaces/simple-pokemons"
import PokemonCard from "./PokemonCard"

interface Props {
    pokemons: SimplePokemons[]
}


export const  PokemonGrid = ({pokemons}:Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
        {
          pokemons.map(pokemon => (
            // <Image
            //   key={pokemon.id}
            //   src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            //   width={100}
            //   height={100}
            //   alt={pokemon.name}
            // />
            <PokemonCard key={pokemon.id} /> 
          ))

        }


      </div>
  )
}
