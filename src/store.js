import {create} from "zustand";

const store = (set) =>({
    pokemons:[{}],
    fetchPokemons : async (apiURL) => {
        try {
          const response = await fetch(apiURL);
          const result = await response.json();
          set(()=>({pokemons: result.results}));
        } catch (err) {
          console.error("Error Fetching Pokemons", err);
        }
    },
    pokemonData:'',
    fetchPokemonData : async (apiURL) => {
        try {
           // console.log(apiURL)
          const response = await fetch(apiURL);
          const result = await response.json();
        // console.log(result);
          set(()=>({pokemonData: result}));
        } catch (err) {
          console.error("Error Fetching Pokemon", err);
        }
    }
 })

 export const useStore = create(store);
