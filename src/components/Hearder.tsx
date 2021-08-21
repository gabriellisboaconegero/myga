import React, { FormEvent } from "react";
import { useState } from "react";
import { useGames } from "../useGames";

export const Header: React.FC = () => {

  const [filter, setFilter] = useState('');
  const {addFilter} = useGames();
  const [dynamic, setDynamic] = useState(false);

  function search(e: FormEvent){
    e.preventDefault();
    addFilter('text', filter.toLowerCase().trim());
  }

  return (
    <header>
      <button
        onClick={e => setDynamic(prev => !prev)}
      >Buscar {dynamic? 'Estática': 'Dinâmica'}</button>
      <form onSubmit={search}>
        <input
          type="text"
          value={filter}
          onChange={e => {
            setFilter(e.target.value);
            if (dynamic) addFilter('text', e.target.value.toLowerCase().trim());
          }}
        />
        <p>Para buscar pelo id use "#". Ex: "#100"</p>
        <button type="submit" disabled={dynamic}>Pesquisar</button>
      </form>
      
    </header>
  )
}