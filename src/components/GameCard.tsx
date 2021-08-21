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
        {Object.entries(medalsList).map(([cor, imgSvg]) => {
          return (
            <div key={`${game.id}_medals_${cor}`}>
              <label htmlFor={`${cor}_${game.id}`}>
              <img 
                width="30px"
                src={imgSvg} 
                alt={`Capacete ${cor}`}
              />
              </label>
              <input 
                type="radio" 
                name={`medal_${game.id}`} 
                id={`${cor}_${game.id}`} 
                value={`${cor}`}
                onChange={e => avaliar(e.target.value, game.id)}
                defaultChecked={medals[game.id] === `${cor}`}
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