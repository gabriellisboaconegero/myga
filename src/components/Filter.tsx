import React from "react";
import { medalsList, ToggleFilterTypes } from "../gamesContext";
import { useGames } from "../useGames";
import zofiaImg from '../assets/zofia.svg';

const genres = ['action-rpg', 'fighting', 'fantasy', 'mmo', 'battle-royale', 'card', 'social', 'sports', 'racing',  'moba', 'strategy', 'shooter', 'mmorpg', 'all'];

export const Filter: React.FC = () => {
  const {addFilter, choices} = useGames();

  return (
    <div>
      {Object.keys(choices).map(key => {
        return (
          <div key={key + '_filter'}>
            <label htmlFor={key + '_filter'}>
              {key.replace('_', ' ')}
            </label>
            <input 
              onChange={e => addFilter(key as ToggleFilterTypes, e.target.checked)}
              type="checkbox" 
              name={key + '_filter'} 
              id={key + '_filter'} 
            />
          </div>
        )
      })}
      <div>
        <label htmlFor="pc">Pc</label>
        <input
          type="checkbox"
          name="pc"
          id="pc"
          value="pc"
          onChange={e => addFilter('pc', e.target.checked)}
        />

        <label htmlFor="web">Web</label>
        <input
          type="checkbox"
          name="web"
          id="web"
          onChange={e => addFilter('web', e.target.checked)}
        />

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

      </div>
    </div>
  )
}