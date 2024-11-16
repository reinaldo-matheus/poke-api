import { useEffect, useState } from 'react';
import { MagnifyingGlass } from "photosphor-icons/react";
import axios from 'axios';
import "./App.css"


import './App.css';

function App() {
  const [pokemons, setPokemons] = useState({});

  const getPokemons = (id) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => {
        const pokemon = response.data;
        setPokemons((prevPokemon) => ({ ...prevPokemon, [id]: pokemon }));
      });
  };

  const arrayPokemons = () => {
    Array(150).fill().map((_, index) => getPokemons(index + 1));
  };

  useEffect(() => {
    arrayPokemons();
  }, []);

  console.log("deu certo", pokemons);

  return (
    <div>
      <h1>Pokedex</h1>

      <div className='busca-container'>
       <MagnifyingGlass size={40} />
       <input
       className='busca'
       type='search'
       placeholder='pesquisando pokemons'
       value={busca}
       onChange={({target}) => setBusca(target.value)}
       />

      </div>
      <ul>
        {Object.values(pokemons).map(({ id, name, types }) => (
          <li>
            {item.id}. {item.name}
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt={name} />
            <h2>{id}. {name}</h2>

            <p>{item.types.map(item => item.type.name).join(" || ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

