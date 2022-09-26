import React from 'react';
import pokemonList from '../data';
import Pokemon from './Pokemon';
import './Pokedex.css';

const Title = () => (
  <div className="main-content">
    <h1 className="title-pokedex">Pokédex</h1>
    <div className="container">
      <ul className="pokedex-container">
        {pokemonList.map((el) => (
          <Pokemon key={ el.id } pokemon={ el } />
        ))}
      </ul>
    </div>
  </div>
);

const teste = () => console.log(pokemonList);
teste();

export default Title;
