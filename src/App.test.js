import React from 'react';
import '.{/App.css';
import {Routes, Route, NavLink, Redirect} from "react-router-dom";
import PokemonList from "./containers/Pokemonlist";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<PokemonList/>} />
        <Route path={"/pokemon/ :pokemon"} element={<PokemonList/>} />
        <Redirect to={"/"} />
      </Routes>
    </div>
  );
}


export default App
