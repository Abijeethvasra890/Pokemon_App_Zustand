import {create} from "zustand";
//zustand state management - Central state management
const store = (set) =>({
    pokemons:[{}],//data used to set the Pokemons in PLP
    fetchPokemons : async (apiURL) => {
        try {
          const response = await fetch(apiURL);
          const result = await response.json();
          set(()=>({pokemons: result.results}));
        } catch (err) {
          console.error("Error Fetching Pokemons", err);
        }
    },
    pokemonData:'',//data used to set the Pokemons in PDP
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
