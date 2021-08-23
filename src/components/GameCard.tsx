import React from 'react';
import { ToggleFilterTypes, Game, medalsList } from '../gamesContext';
import { useGames } from '../useGames';

import {RiShieldStarFill} from 'react-icons/ri';
import {BsBookmark, BsBookmarkFill} from 'react-icons/bs';
import { 
  ButtonFilter, 
  GameCardWrapper, 
  GameImage, 
  MainContainer, 
  MedalsContainer, 
  FotterContainer 
} from './styles';

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
              showSvg
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
        <p><strong>Gênero:</strong> {game.genre}</p>
        <p><strong>Plataforma:</strong> {game.platform}</p>
        <p><strong>Desenvolvedora(or):</strong> {game.developer}</p>
        <p><strong>Data de lançamento:</strong> {new Date(game.release_date).getFullYear()}</p>
      </MainContainer>
      <FotterContainer>
        <div className="tags">
          {Object.entries(choices).map(([key, choice]) => {
            return (
              <ButtonFilter
                key={game.id + key}
                onClick={e => choice.toggle(game.id)}
                checked={choice.value[game.id]}
                showSvg
              >
                {choice.value[game.id]? <BsBookmarkFill /> : <BsBookmark/>}
                <span>{key.replace('_', ' ')}</span>
              </ButtonFilter>
            )
          })}
        </div>      
        <a 
          href={game.game_url} 
          target="_blank"
          onClick={e => acessar(game.id)}
        >{game.platform.indexOf('Web') !== -1? 'Jogar' : 'Instalar'}</a>
      </FotterContainer>
    </GameCardWrapper>
  )
}