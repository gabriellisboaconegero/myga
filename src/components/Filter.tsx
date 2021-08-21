import React from "react";
import { ToggleFilterTypes } from "../gamesContext";
import { useGames } from "../useGames";

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
    </div>
  )
}