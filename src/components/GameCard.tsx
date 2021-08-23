import React from 'react';
import { ToggleFilterTypes, Game, medalsList } from '../gamesContext';
import { useGames } from '../useGames';

import {RiShieldStarFill} from 'react-icons/ri';
import {BsBookmark, BsBookmarkFill} from 'react-icons/bs';
import { ButtonFilter, GameCardWrapper, GameImage, MainContainer, MedalsContainer } from './styles';

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
    <GameCardWrapper>
      <MedalsContainer>
        {medalsList.map((icon, avaliacao) => {
          return (
            <ButtonFilter
              key={`${game.id}_medals_${avaliacao}`}
              noText
              checked={medals[game.id] === avaliacao}
              onClick={e => avaliar(avaliacao, game.id)}
            >
              {icon}
            </ButtonFilter>
          )
        })}
      </MedalsContainer>
      <GameImage>
          <img src={game.thumbnail} alt={game.title} />
          <div className="blurredDiv">
            <span>{game.title}</span>
            <button
              className={game.id === jogoFavorito + 1? 'checked' : ''}
              onClick={e => marcarComoFavorito(game.id)}
              title='Jogo favorito'
            >
              <RiShieldStarFill />
            </button>
          </div>
        </GameImage>
      <MainContainer>
        <p>{game.short_description}</p>
        <span>Gênero: {game.genre}</span>
        <br />
        <span>Plataforma: {game.platform}</span>
        <br />
        <span>Desenvolvedora(or): {game.developer}</span>
        <br />
        <span>Data de lançamento: {new Date(game.release_date).getFullYear()}</span>
        <br />
      </MainContainer>
      <footer>
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
      </footer>
    </GameCardWrapper>
  )
}