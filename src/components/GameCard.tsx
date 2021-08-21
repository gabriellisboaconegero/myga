import React from 'react';
import { ToggleFilterTypes, Game } from '../gamesContext';
import { useGames } from '../useGames';

type PropsType = {
  game: Game;
}

export const GameCard: React.FC<PropsType> = ({game}) => {
  const {choices} = useGames();
  return (
    <div>
      <span>{game.title}</span>
      <img src={game.thumbnail} alt={game.title} />
      <p>{game.short_description}</p>
      <div>
        <span>Gênero: {game.genre}</span>
        <br />
        <span>Plataforma: {game.platform}</span>
        <br />
        <span>Desenvolvedora(or): {game.developer}</span>
        <br />
        <span>Data de lançamento: {new Date(game.release_date).getFullYear()}</span>
        <br />

        {Object.entries(choices).map(([key, choice]) => {
          return (
            <div key={game.id + key}>
              <input
                onClick={e => choice.toggle(game.id)}
                type="checkbox"
                name={game.id + key}
                id={game.id + key}
                defaultChecked={game[key as ToggleFilterTypes]}
              />
              <label 
                htmlFor={game.id + key}
              >{key.replace('_', ' ')}</label>
            </div>
          )
        })}
        
        <a href={game.game_url} target="_blank">{game.platform.indexOf('Web') !== -1? 'Jogar' : 'Instalar'}</a>
      </div>
      <br />
    </div>
  )
}