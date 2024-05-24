"use client";
import './pokeapi.css';
import React from 'react';
import { useState } from 'react';
import Axios from 'axios';

export default function Pokeapi() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState({});

  const [errorMessage, setErrorMessage] = useState("");

  const searchPokemon = () => {
    if (!pokemonName) {
      setErrorMessage("Please enter the name of a pokemon in the search.");
    } else {
      Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) => {
        setPokemon({
          name: pokemonName,
          species: response.data.species.name,
          image: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
        })
      }).catch(function (error) {
        // handle error
        console.log(error);
        if (error.response.status == 404) {
          setErrorMessage("Error: Please make sure you entered a valid pokemon name.");
        }
      })
    }

  }
  console.log(pokemon);

  return (
    <div className='offWhite-Primary pageSpacing'>
      <div className='appArea bg-white w-9/12'>
        <p className='title'>Pokemon Search</p>

        {/* search bar */}
        <div className='searchArea'>
          <input 
            type="text" 
            className='searchBar' 
            onChange={(event) => { setPokemonName(event.target.value.toLowerCase()); setErrorMessage(""); setPokemon({}) }}
            onKeyDown={(e) => {
              if (e.key === "Enter")
                searchPokemon()
              }}
            placeholder='Enter Name...'
            />
          <button onClick={searchPokemon} className='submitButton'>Search</button>
        </div>
        {/* pokemon data */}
        {errorMessage ? (
          <p>{errorMessage}</p>
        ) : (
          <></>
        )}
        {pokemon ? (
          <div>
            <img src={pokemon.image} alt="" />
          </div>
        ) : (
          <></>
        )}

      </div>

    </div>
  )
}
