import React from "react";
import { useGames } from "../useGames";

export const Filter: React.FC = () => {
  const {addFilter} = useGames();

  return (
    <div>
      <label htmlFor="favorito_filter"></label>
      <input onChange={e => addFilter('favorito', e.target.checked)} type="checkbox" name="favorito_filter" id="favorito_filter" />
    </div>
  )
}