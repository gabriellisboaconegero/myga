import React, { FormEvent } from "react";
import { useState } from "react";
import { useGames } from "../useGames";
import { Button, CheckedButton, SearchBarWrapper } from "./styles";
import {FaSearch} from 'react-icons/fa';

export const SearchBar: React.FC = () => {

  const [filterInput, setFilterInput] = useState('');
  const {setFilter} = useGames();
  const [dynamic, setDynamic] = useState(false);

  function search(e: FormEvent){
    e.preventDefault();
    setFilter('text', filterInput.toLowerCase().trim());
  }

  return (
    <SearchBarWrapper>
      <CheckedButton
        onClick={e => setDynamic(prev => !prev)}
        checked={dynamic}
      >
        Buscar dinâmica
      </CheckedButton>
      <form onSubmit={search}>
        <input
          type="text"
          value={filterInput}
          placeholder="Jogo / #id"
          onChange={e => {
            setFilterInput(e.target.value);
            if (dynamic) setFilter('text', e.target.value.toLowerCase().trim());
          }}
        />
        <button type="submit" disabled={dynamic}><FaSearch /></button>
      </form>
      <p>Para buscar pelo id use "#". Ex: "#100"</p>
    </SearchBarWrapper>
  )
}