import React from 'react';
import { Game } from '../gamesContext';
import { useGames } from '../useGames';
import { usePermChoice } from '../usePermChoice';

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

        <input onClick={e => choices.favorito.toggle(game.id)} type="checkbox" name={game.id + 'favorito'} id={game.id + 'favorito'} defaultChecked={game.favorito}/>
        <label htmlFor={game.id + 'favorito'}>Favoritos</label>

        {/* <input onClick={e => quererJogar(game.id)} type="checkbox" name={game.id + 'quero_jogar'} id={game.id + 'quero_jogar'} defaultChecked={game.quero_jogar}/>
        <label htmlFor={game.id + 'quero_jogar'}>Quero jogar</label>

        <input onClick={e => jogar(game.id)} type="checkbox" name={game.id + 'jogando'} id={game.id + 'jogando'} defaultChecked={game.jogando}/>
        <label htmlFor={game.id + 'jogando'}>Jogando</label>

        <input onClick={e => jaJogar(game.id)} type="checkbox" name={game.id + 'ja_joguei'} id={game.id + 'ja_joguei'} defaultChecked={game.ja_joguei}/>
        <label htmlFor={game.id + 'ja_joguei'}>Já joguei</label>        

        <input onClick={e => zerar(game.id)} type="checkbox" name={game.id + 'zerei'} id={game.id + 'zerei'} defaultChecked={game.zerei}/>
        <label htmlFor={game.id + 'zerei'}>Zerei</label> */}
        
        <a href={game.game_url} target="_blank">{game.platform.indexOf('Web Browser') !== -1? 'Jogar' : 'Instalar'}</a>
      </div>
      <br />
    </div>
  )
}