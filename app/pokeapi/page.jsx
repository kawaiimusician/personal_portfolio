"use client";
import './pokeapi.css';
import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
import Image from 'next/image';

export default function Pokeapi() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState({});
  const [displayPokemon, setDisplayPokemon] = useState(false);

  const [evolutionChain, setEvolutionChain] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");

  const getPokemonChainImg = (url) => {
    let image;
    // find species info
    Axios.get(url).then((baseSpeciesRes) => {
      // find pokemon info
      console.log(baseSpeciesRes.data.varieties[0].pokemon.url);
      Axios.get(baseSpeciesRes.data.varieties[0].pokemon.url).then((basePokeRes) => {
        image = basePokeRes.data.sprites.front_default;
        console.log(basePokeRes.data.sprites.front_default);
        return image;
      })
    })
  }

  const searchPokemon = () => {
    if (!pokemonName) {
      setErrorMessage("Please enter the name of a pokemon in the search.");
    } else {
      // get pokemon information
      Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) => {
        let res = response.data;

        let height = Math.round((res.height * 0.3280839895) * 10) / 10;
        let weight = Math.round((res.weight * 0.2204622622) * 10) / 10;

        setPokemon({
          name: getPokemonDisplayName(pokemonName),
          image: res.sprites.front_default,
          hp: res.stats[0].base_stat,
          height: height,
          weight: weight
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
  // console.log(pokemon)

  const getPokemonSearchName = (name) => {
    name = name.replace(" ", "-");
    name = name.toLowerCase();
    return name;
  }

  const getPokemonDisplayName = (name) => {
    name = name.replace("-", " ");
    name = name.toLowerCase()
      .split(' ')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');
    return name;
  }

  return (
    <div className='offWhite-Primary pageSpacing'>
      <div className='appArea bg-white w-9/12'>
        <p className='title'>Pokemon Search</p>
        <p>Enter the name of your favorite pokemon!</p>

        {/* search bar */}
        <div className='searchArea'>
          <input
            type="text"
            className='searchBar'
            onChange={(event) => { setPokemonName(getPokemonSearchName(event.target.value)); setErrorMessage(""); setPokemon({}); setDisplayPokemon(false) }}
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
          <p className='errorMessage'>{errorMessage}</p>
        ) : (
          <></>
        )}
        {displayPokemon ? (
          <div>
            <img src={pokemon.image} alt={pokemon.name} height={200} width={200} className='pokemonAvatar' />
            <p><span className='font-bold'>Name:</span> {pokemon.name}</p>
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
