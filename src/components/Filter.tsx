import React from "react";
import { medalsList, ToggleFilterTypes } from "../gamesContext";
import { useGames } from "../useGames";
import zofiaImg from '../assets/zofia.svg';
import {GiTowerFlag} from 'react-icons/gi';
import { useState } from "react";
import { FilterWrapper } from "./styles";
import { CheckboxFilter } from "./CheckbocFilter";

const genres = ['action-rpg', 'fighting', 'fantasy', 'mmo', 'battle-royale', 'card', 'social', 'sports', 'racing',  'moba', 'strategy', 'shooter', 'mmorpg', 'all'];

export const Filter: React.FC = () => {
  const {addFilter, choices} = useGames();
  const [open, setOpen] = useState(false);

  return (
    <FilterWrapper open={open}>
      <h2>Filtros</h2>
      {Object.keys(choices).map((key) => { 
        return <CheckboxFilter key={key + '_filter'} keyProp={key}/>
      })}

      <CheckboxFilter keyProp="pc" />
      <CheckboxFilter keyProp="web" />

      {Object.entries(medalsList).map(([cor, imgSvg]) => {
        return (
          <div key={`medals_filter_${cor}`}>
            <label htmlFor={`medal_${cor}`}>
            <img 
              width="30px"
              src={imgSvg} 
              alt={`Capacete ${cor}`}
            />
            </label>
            <input 
              type="radio" 
              name='medal_filter'
              id={`medal_${cor}`} 
              value={`${cor}`}
              onChange={e => addFilter('medal', cor)}
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
    </FilterWrapper>
  )
}