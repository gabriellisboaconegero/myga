import React from 'react';
import { Game } from '../gamesContext';

type PropsType = {
  game: Game;
}

export const GameCard: React.FC<PropsType> = ({game}) => {
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

        <input type="checkbox" name='favorito' id="favorito" defaultChecked={game.favorito}/>
        <label htmlFor="favorito">Favoritos</label>

        <input type="checkbox" name='quero_jogar' id="quero_jogar" defaultChecked={game.quero_jogar}/>
        <label htmlFor="quero_jogar">Quero jogar</label>

        <input type="checkbox" name='jogando' id="jogando" defaultChecked={game.jogando}/>
        <label htmlFor="jogando">Jogando</label>

        <input type="checkbox" name='ja_joguei' id="ja_joguei" defaultChecked={game.ja_joguei}/>
        <label htmlFor="ja_joguei">Já joguei</label>        

        <input type="checkbox" name='zerei' id="zerei" defaultChecked={game.zerei}/>
        <label htmlFor="zerei">Zerei</label>
        
        <a href={game.game_url} target="_blank">{game.platform.indexOf('Web Browser') !== -1? 'Jogar' : 'Instalar'}</a>
      </div>
      <br />
    </div>
  )
}