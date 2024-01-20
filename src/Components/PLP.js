import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import NavBar from './NavBar';
import { useStore } from '../store';

const PLP = () => {
  //const [pokemons, setPokemons] = useState([]);
  const apiURL = "https://pokeapi.co/api/v2/pokemon/";
  const pokemons = useStore((state) => state.pokemons)//fetching data from Zustand Store
  const fetchPokemons = useStore((state) => state.fetchPokemons)//fetching function from Zustand Store

  useEffect(() => {
    fetchPokemons(apiURL);//triggers the function in Zustand store
  }, []);
  // /console.log("fetched", pokemons);
  return (
    <>
    <NavBar/>
    <div className="plp-container">
      <h1>Pokemons</h1>
      <div className="pokemon-list">
        { 
          pokemons.map((pokemon, index) => (
          <PokemonCard key={index} data={pokemon} id={index + 1} />
        ))}
      </div>
    </div>
    </>
  );
};

export default PLP;
