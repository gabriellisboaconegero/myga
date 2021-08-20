import React from 'react';
import { useState } from 'react';
import { GameCard } from '../components/GameCard';
import { Header } from '../components/Hearder';
import { useGames } from '../useGames';

export const Home:React.FC = () => {
  const [page, setPage] = useState(1);
  const {gamesRaw, filters} = useGames();

  function games(){
    console.log(filters);
    let temporaryGames = gamesRaw;
    if (Object.keys(filters).length > 0){
      let text = filters.text.toString();
      if (text.startsWith('#')){
        if (text.length > 1){
          console.log(gamesRaw[0].id);
          temporaryGames = gamesRaw.filter(game => game.id.toString() === text.slice(1))
        } 
      } else{
        temporaryGames = gamesRaw.filter(game => game.title.toLowerCase().indexOf(text) !== -1)
      }
    }
    return temporaryGames.filter((game, id) => id < page * 20);
  }

  return (
    <div>
      <Header />
      {games().map(game => {
        return (
          <GameCard key={game.title} game={game} />
        );
      })}
      <button
        onClick={e => setPage(1)}
        disabled={page === 1}
      >Primeira pg</button>

      <button
        onClick={e => setPage(prev => prev + 1)}
        disabled={page >= Math.floor(gamesRaw.length / 20) + 1}
      >Proximo</button>

      <button
        onClick={e => setPage(prev => prev - 1)}
        disabled={page === 1}
      >Anterior</button>

      <button
        onClick={e => setPage(Math.floor(gamesRaw.length / 20) + 1)}
        disabled={page >= Math.floor(gamesRaw.length / 20) + 1}
      >Ultimo</button>

      <span>{page}</span>

    </div>
    
  );
}
