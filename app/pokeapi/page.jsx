"use client";
import './pokeapi.css';
import React from 'react';
import { useState } from 'react';
import Axios from 'axios';

export default function Pokeapi() {
  // holds pokemon name
  const [pokemonName, setPokemonName] = useState("");
  // holds pokemon data after search
  const [pokemon, setPokemon] = useState({});
  // toggles display of pokemon data
  const [displayPokemon, setDisplayPokemon] = useState(false);

  // holds error message
  const [errorMessage, setErrorMessage] = useState("");


  const searchPokemon = (pokeName) => {
    console.log("Pokemon name entered: " + pokeName)
    if (!pokeName) {
      setErrorMessage("Please enter the name of a pokemon in the search.");
    } else {
      // get pokemon information
      Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`).then((response) => {
        let res = response.data;

        let height = Math.round((res.height * 0.3280839895) * 10) / 10;
        let weight = Math.round((res.weight * 0.2204622622) * 10) / 10;

        setPokemon({
          name: getPokemonDisplayName(res.name),
          image: res.sprites.front_default,
          hp: res.stats[0].base_stat,
          height: height,
          weight: weight,
          dexNum: res.id
        });
        setDisplayPokemon(true);
      }).catch((error) => {
        // handle error
        console.log(error);
        if (error.response.status == 404) {
          setErrorMessage("Error: Please make sure you entered a valid pokemon name.");
        }
      })
    }
  }

  // function to get name to match syntax of api by replacing spaces with a dash and making the name lower case
  const getPokemonSearchName = (name) => {
    name = name.replace(" ", "-");
    name = name.toLowerCase();
    return name;
  }

  // function to get name to a displayable state by capitalizing, removing the dash and placing a space.
  const getPokemonDisplayName = (name) => {
    name = name.replace("-", " ");
    name = name.toLowerCase()
      .split(' ')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');
    return name;
  }

  // generates number between 1 and 1024
  const getRandomPokemon = () => {
    setErrorMessage(""); 
    let randomId = Math.floor(Math.random() * (1025 - 1 + 1) + 1);

    searchPokemon(randomId);
    document.getElementById("pokeSearchBar").value = "";
    setPokemonName(randomId)
  }

  // handles click of random button
  const handleRandomClick = () => {
    searchPokemon(pokemonName);
  }

  return (
    <div className='offWhite-Primary pageSpacing'>
      <div className='appArea bg-white w-9/12'>
        <p className='title'>Pokemon Search</p>
        <p>Enter the name or Pokédex number of your favorite pokemon!</p>

        {/* search bar */}
        <div className='searchArea'>
          <input
            type="text"
            className='searchBar' id="pokeSearchBar"
            onChange={(event) => { 
              setPokemonName(getPokemonSearchName(event.target.value)); 
              setErrorMessage("");
              setPokemon({});
              setDisplayPokemon(false);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter")
                searchPokemon(pokemonName);
            }}
            placeholder='Enter Name...'
          />
          <button onClick={handleRandomClick} className='submitButton'>Search</button>
        </div>
        <button onClick={getRandomPokemon} className='randomButton'>Random</button>

        {/* pokemon data */}
        {errorMessage ? (
          <p className='errorMessage'>{errorMessage}</p>
        ) : (
          <></>
        )}
        {displayPokemon ? (
          <div>
            <img src={pokemon.image} alt={pokemon.name} height={200} width={200} className='pokemonAvatar' />
            <p><span className='font-bold'>Name:</span> {pokemon.name}</p>
            <p><span className='font-bold'>Pokédex Number:</span> {pokemon.dexNum}</p>
            <p><span className='font-bold'>HP:</span> {pokemon.hp}</p>
            <p><span className='font-bold'>Height (ft):</span> {pokemon.height}</p>
            <p><span className='font-bold'>Weight (lb):</span> {pokemon.weight}</p>
          </div>
        ) : (
          <>
          </>
        )}

      </div>

    </div>
  )
}
