import React from "react";
import { useGames } from "../useGames";
import {BsBookmark} from 'react-icons/bs'
import { medalsList } from "../gamesContext";
import { ProfileWrapper } from "./styles";
import { Header } from "../components/Header";

export const Profile: React.FC = () => {
  const {
    gamesRaw, 
    jogoFavorito, 
    choices, 
    acessados,
    medals
  } =useGames();

  function findMostUsedmedals(){
    const medalsCount: Record<string, number> = {};
    for (let i in medals){
      const medal = medals[i]
      if (medalsCount[medal]){
        medalsCount[medal]++
      }else{
        medalsCount[medal] = 1;
      }
    }
    return Object.entries(medalsCount).sort((a,b) => b[1]- a[1]).slice(0, 3);
  }

  return (
      <ProfileWrapper>
        <Header />
        <main>
          {gamesRaw[jogoFavorito] && (
            <div>
              <h2>Jogo Favorito: {gamesRaw[jogoFavorito].title}</h2>
              <img src={gamesRaw[jogoFavorito].thumbnail} alt={gamesRaw[jogoFavorito].title} />
            </div>
          )}
          <div>
            <h2>Favoritos</h2>
            <BsBookmark />
            {gamesRaw.filter(game => choices.favorito.value[game.id] && game.id !== jogoFavorito + 1).map(game => {
              return (
                <div key={`${game.id}_favoritos_profile`}>
                  <p>{game.title}</p>
                  <img src={game.thumbnail} alt={game.title} />
                </div>
            )})}
          </div>
          <div>
            <h2>Jogos baixados / jogados</h2>
            {gamesRaw.filter(game => acessados[game.id]).map(game => {
              return (
                <div key={`${game.id}_acessados_profile`}>
                  <p>{game.title}</p>
                  <img src={game.thumbnail} alt={game.title} />
                </div>
              )
            })}
          </div>
          <div>
            <h2>Avalições mais dadas</h2>
            {findMostUsedmedals().map((value, id) => {
              return (
                <div key={value[0] + '_medal_' + id }>
                  {medalsList[value[0]]}
                  <span>{value[1]}</span>
                </div>
              )
            })}
          </div>
        </main>
      </ProfileWrapper>
  )
}