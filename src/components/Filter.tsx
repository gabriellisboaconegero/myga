import React from "react";
import { medalsList, ToggleFilterTypes } from "../gamesContext";
import { useGames } from "../useGames";
import zofiaImg from '../assets/zofia.svg';
import {BsChevronCompactRight} from 'react-icons/bs';
import { useState } from "react";
import { CheckboxFiltersContainer, FilterWrapper, GenreFiltersContainer, MedalsFiltersContainer, ShowFiltersButton } from "./styles";
import { CheckboxFilter } from "./CheckbocFilter";

const genres = ['action-rpg', 'fighting', 'fantasy', 'mmo', 'battle-royale', 'card', 'social', 'sports', 'racing',  'moba', 'strategy', 'shooter', 'mmorpg', 'all'];

export const Filter: React.FC = () => {
  const {addFilter, choices} = useGames();
  const [open, setOpen] = useState(false);

  return (
    <FilterWrapper className={open? 'open': ''}>
      <h1>Filtros</h1>

      <ShowFiltersButton onClick={e => setOpen(!open)} title="Filtros">
        <BsChevronCompactRight />  
      </ShowFiltersButton>

      <CheckboxFiltersContainer>
        <h3>Geral</h3>
        {Object.keys(choices).map((key) => {
          return <CheckboxFilter key={key + '_filter'} keyProp={key}/>
        })}
        <CheckboxFilter keyProp="pc" />
        <CheckboxFilter keyProp="web" />
      </CheckboxFiltersContainer>

      <MedalsFiltersContainer>
        <h3>Medalhas</h3>
        {medalsList.map((icon, avaliacao) => {
          return (
            <div key={`medals_filter_${avaliacao}`}>
              <label htmlFor={`medal_${avaliacao}`}>
                {icon}
              </label>
              <input
                type="radio"
                name='medal_filter'
                id={`medal_${avaliacao}`}
                value={`${avaliacao}`}
                onChange={e => addFilter('medal', avaliacao)}
              />
            </div>
          );
        })}
        <div>
          <label htmlFor='medal_all'>
          <img
            width="30px"
            src={zofiaImg}
            alt="All medals"
          />
          </label>
          <input
            type="radio"
            name='medal_filter'
            id='medal_all'
            value='all'
            onChange={e => addFilter('medal', 'all')}
          />
        </div>
      </MedalsFiltersContainer>

      <GenreFiltersContainer>
        <h3>Gênero</h3>
        {genres.map((genre, id) => {
          return (
            <div key={genre + id}>
              <label htmlFor={genre}>{genre}</label>
              <input
                type="radio"
                name="genre"
                id={genre}
                onChange={e => addFilter('genre', genre)}
              />
            </div>
          )
        })}
      </GenreFiltersContainer>

    </FilterWrapper>
  )
}