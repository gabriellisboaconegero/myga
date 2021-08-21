import React from "react";
import { ToggleFilterTypes } from "../gamesContext";
import { useGames } from "../useGames";

const genres = ['action-rpg', 'fighting', 'fantasy', 'mmo', 'battle-royale', 'card', 'social', 'sports', 'racing',  'moba', 'strategy', 'shooter', 'mmorpg'];

export const Filter: React.FC = () => {
  const {addFilter, choices} = useGames();

  return (
    <div>
      {Object.keys(choices).map(key => {
        return (
          <div key={key + '_filter'}>
            <label htmlFor={key + '_filter'}>{key.replace('_', ' ')}</label>
            <input onChange={e => addFilter(key as ToggleFilterTypes, e.target.checked)} type="checkbox" name={key + '_filter'} id={key + '_filter'} />
          </div>
        )
      })}
      <div>
        <label htmlFor="platform_pc_filter">Pc</label>
        <input
          type="checkbox"
          name="pc"
          id="pc"
          value="pc"
          onChange={e => addFilter('pc', e.target.checked)}
        />

        <label htmlFor="platform_web_filter">Web</label>
        <input
          type="checkbox"
          name="web"
          id="web"
          onChange={e => addFilter('web', e.target.checked)}
        />

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