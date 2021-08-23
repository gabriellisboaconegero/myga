import React from "react";
import { useGames } from "../useGames";
import { medalsList, Game } from "../gamesContext";
import { ProfileWrapper, GamesList, FavGameContainer, MedalsPodioContainer, MedalBar } from "./styles";
import { Header } from "../components/Header";
import { GameImage } from "../components/styles";
import { RiShieldStarFill } from "react-icons/ri";

export const Profile: React.FC = () => {
  const {
    gamesRaw, 
    jogoFavorito, 
    choices, 
    acessados,
    medals
  } =useGames();

  function findMostUsedmedals(){
    const medalsCount: Record<number, number> = {};
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

  function FavoriteGameData(): Game{
    return gamesRaw.filter(game => game.id === jogoFavorito)[0]
  }
  return (
      <div>
        <Header />
        <ProfileWrapper>
          <FavGameContainer>
            <h2>Jogo Favorito</h2>
            {FavoriteGameData() && (
              <GameImage>
                <img src={FavoriteGameData().thumbnail} alt={FavoriteGameData().title} />
                <div className="blurredDiv">
                  <span>{FavoriteGameData().title}</span>
                  <button
                    className={FavoriteGameData().id === jogoFavorito? 'checked' : ''}
                    title='Jogo favorito'
                  >
                    <RiShieldStarFill />
                  </button>
                </div>
              </GameImage>
            )}
          </FavGameContainer>
          <GamesList>
            <h2>Favoritos</h2>
            {gamesRaw.filter(game => choices.favorito.value[game.id]).map(game => {
              return (
                <div className="gameImgContainer" key={`${game.id}_favoritos_profile`}>
                  <img width="200px" src={game.thumbnail} alt={game.title} />
                </div>
            )})}
          </GamesList>
          <GamesList>
            <h2>Jogos baixados / jogados</h2>
            {gamesRaw.filter(game => acessados[game.id]).map(game => {
              return (
                <div className="gameImgContainer" key={`${game.id}_acessados_profile`}>
                  <img src={game.thumbnail} alt={game.title} />
                </div>
              )
            })}
          </GamesList>
          <MedalsPodioContainer>
            <h2>Avalições mais dadas</h2>
            {findMostUsedmedals().map((value, id) => {
              return (
                <MedalBar quantidade={value[1]} key={value[0] + '_medal_' + id }>
                  <span>{medalsList[parseInt(value[0])]}</span>
                  <span>{value[1]}</span>
                </MedalBar>
              )
            })}
          </MedalsPodioContainer>
        </ProfileWrapper>
      </div>
  )
}