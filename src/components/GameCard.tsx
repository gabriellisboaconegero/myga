import React from 'react';
import { ToggleFilterTypes, Game, medalsList } from '../gamesContext';
import { useGames } from '../useGames';

import {RiShieldStarFill} from 'react-icons/ri';
import {BsBookmark, BsBookmarkFill} from 'react-icons/bs';

// import 

type PropsType = {
  game: Game;
}

export const GameCard: React.FC<PropsType> = ({game}) => {
  const {
    choices,
    avaliar, 
    marcarComoFavorito, 
    medals, 
    jogoFavorito,
    acessar
  } = useGames();
  return (
    <div>
      <div>
        {medalsList.map((icon, avaliacao) => {
          return (
            <div key={`${game.id}_medals_${avaliacao}`}>
              <label htmlFor={`${avaliacao}_${game.id}`}>
              {icon}
              </label>
              <input 
                type="radio" 
                name={`medal_${game.id}`} 
                id={`${avaliacao}_${game.id}`} 
                value={`${avaliacao}`}
                onChange={e => avaliar(parseInt(e.target.value), game.id)}
                defaultChecked={medals[game.id] === avaliacao}
              />
            </div>
          )
        })}
      </div>
      <span>{game.title}</span>
      <img src={game.thumbnail} alt={game.title} />
      <label htmlFor={`jogo_favorito_${game.id}`}>
        <RiShieldStarFill />
      </label>
      <input 
        type="radio" 
        name="jogo_favorito" 
        id={`jogo_favorito_${game.id}`}
        onChange={e => marcarComoFavorito(game.id)}
        defaultChecked={game.id === jogoFavorito + 1}
      />
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
              >
                {choice.value[game.id]? <BsBookmarkFill /> : <BsBookmark/>}
                <span>{key.replace('_', ' ')}</span>
              </label>
            </div>
          )
        })}
        
        <a 
          href={game.game_url} 
          target="_blank"
          onClick={e => acessar(game.id)}
        >{game.platform.indexOf('Web') !== -1? 'Jogar' : 'Instalar'}</a>
      </div>
      <br />
    </div>
  )
}