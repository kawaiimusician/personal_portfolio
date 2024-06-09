"use client";
import './pokeapi.css';
import { useState } from 'react';
import Axios from 'axios';

export default function Pokeapi() {
  // holds pokemon name
  const [pokemonName, setPokemonName] = useState("");
  // holds pokemon data after search
  const [pokemon, setPokemon] = useState({});
  // toggles display of pokemon data
  const [displayPokemon, setDisplayPokemon] = useState(false);
  // holds evolution data
  const [pokemonEvoData, setEvoData] = useState([]);
  const [displayEvoData, setDisplayEvoData] = useState(false);
  // holds error message
  const [errorMessage, setErrorMessage] = useState("");

  const getPokemon = (pokeName) => {
    return new Promise((resolve, reject) => {
      Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`).then((response) => {
        return response;
      }).then(data => {
        resolve(data);
      }).catch((error) => {
        // handle error
        console.error(error);
        if (error.response.status == 404) {
          setErrorMessage("Error: Please make sure you entered a valid pokemon name.");
        }
        reject(error);
      })
    })
  }

  const getSpecies = (speciesURL) => {
    return new Promise((resolve, reject) => {
      Axios.get(`${speciesURL}`).then((response) => {
        return response;
      }).then(data => {
        resolve(data);
      }).catch((error) => {
        // handle error
        console.error(error);
        if (error.response.status == 404) {
          setErrorMessage("");
        }
        reject(error);
      })
    })
  }

  const getEvolution = (evolutionChainURL) => {
    return new Promise((resolve, reject) => {
      let pokemonEvolutionChain = [];
      Axios.get(`${evolutionChainURL}`).then((response) => {
        return response;
      }).then(data => {
        let evolutionData = data.data;
        if (data.data.chain.evolves_to.length != 0) {
          // base evolution:
          // console.log("name", evolutionData.chain.species.name)
          pokemonEvolutionChain.push({
            name: evolutionData.chain.species.name
          })
          let evolution1 = evolutionData.chain.evolves_to;
          // console.log("next evolution", evolution1);
          if (evolution1.length != 0) {
            // 1st evolution:
            // console.log("name 1", evolution1[0].species.name)
            pokemonEvolutionChain.push({
              name: evolution1[0].species.name
            })

            let evolution2 = evolution1[0].evolves_to
            // console.log("evolution 2", evolution2)
            if (evolution2.length != 0) {
              // 2nd evolution:
              // console.log("name 2", evolution2[0].species.name)
              pokemonEvolutionChain.push({
                name: evolution2[0].species.name
              })
            }
          }
        }
        // console.log(pokemonEvolutionChain)
        // get evolution images if there are evolutions
        if (pokemonEvolutionChain[0]) {
          getPokemon(pokemonEvolutionChain[0].name).then((pokeData) => {
            pokemonEvolutionChain[0].image = pokeData.data.sprites.front_default
          })
        }
        if (pokemonEvolutionChain[1]) {
          getPokemon(pokemonEvolutionChain[1].name).then((pokeData) => {
            pokemonEvolutionChain[1].image = pokeData.data.sprites.front_default
          })
        }
        if (pokemonEvolutionChain[2]) {
          getPokemon(pokemonEvolutionChain[2].name).then((pokeData) => {
            pokemonEvolutionChain[2].image = pokeData.data.sprites.front_default
          })
        }

        resolve(pokemonEvolutionChain);
      }).catch((error) => {
        // handle error
        console.error(error);
        reject(error);
      })
    })
  }

  const setData = (pokemonObj, pokemonEvos) => {
    setPokemon(pokemonObj);
    setEvoData(pokemonEvos);
    setDisplayPokemon(true);
    setDisplayEvoData(true);
  }

  const searchPokemon = (pokeName) => {
    console.log("Pokemon name entered: " + pokeName)
    if (!pokeName) {
      setErrorMessage("Please enter the name of a pokemon in the search.");
    } else {
      let pokemonData;
      let pokemonSpeciesData;
      let evolutionData;

      let pokemonObj = {};
      getPokemon(pokeName).then(pokeData => {
        // get pokemon specific data
        pokemonData = pokeData.data;
        // console.log("Pokemon Data", pokemonData);

        let height = Math.round((pokemonData.height * 0.3280839895) * 10) / 10;
        let weight = Math.round((pokemonData.weight * 0.2204622622) * 10) / 10;

        pokemonObj.name = getPokemonDisplayName(pokemonData.name);
        pokemonObj.image = pokemonData.sprites.front_default;
        pokemonObj.hp = pokemonData.stats[0].base_stat;
        pokemonObj.height = height;
        pokemonObj.weight = weight;
        pokemonObj.dexNum = pokemonData.id;

        // return to get species information
        return getSpecies(pokemonData.species.url);
      }).then(speciesData => {
        pokemonSpeciesData = speciesData.data;
        // console.log("species data", speciesData);

        // return to get evolution chain information
        return getEvolution(pokemonSpeciesData.evolution_chain.url);
      }).then((evoChain) => {
        setData(pokemonObj, evoChain);
      }).catch(err => {
        console.log(err);
      });
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
        {console.log("evolution data", pokemonEvoData)}
        {displayEvoData ? (
          <div>
            {pokemonEvoData[0] ? (
              <img src={pokemonEvoData[0].image} alt={pokemonEvoData.name} />
            ) : (<>{console.log("nah boo")}</>)}
            {pokemonEvoData[1] ? (
              <img src={pokemonEvoData[1].image} alt={pokemonEvoData.name} />
            ) : (<></>)}
            {pokemonEvoData[2] ? (
              <img src={pokemonEvoData[1].image} alt={pokemonEvoData.name} />
            ) : (<></>)}
          </div>
        ) : (
          <></>
        )}

      </div>

    </div>
  )
}
