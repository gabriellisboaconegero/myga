import React from 'react';
import { useState } from 'react';
import { PassThrough } from 'stream';
import { Filter } from '../components/Filter';
import { GameCard } from '../components/GameCard';
import { Header } from '../components/Hearder';
import { Choice, Game, ToggleFilterTypes } from '../gamesContext';
import { useGames } from '../useGames';

export const Home:React.FC = () => {
  const [page, setPage] = useState(1);
  const {gamesRaw, filters, choices} = useGames();

  function games(){
    console.log(filters);
    let temporaryGames = gamesRaw;
    
    // Para cada filtro aplicar uma lógica
    // Por ser o único diferente o tipo text tem tratamento especial
    // Ja os outros são todos, boolean são tratados iguais
    for (let pair of Object.entries(filters)){
      // pair[0] == key: string (tipo de filtro)
      // pair [1] == value: string | boolean (valor do filtro, ou seja)
      // pair[0] == text pair[1] == string
      // pair[0] != text pair[1] == boolean
      if (pair[0] === 'text'){
        let text = filters.text.toString();
        if (text.startsWith('#')){
          if (text.length > 1){
            temporaryGames = temporaryGames.filter(game => game.id.toString() === text.slice(1))
          } 
        } else{
          temporaryGames = temporaryGames.filter(game => game.title.toLowerCase().indexOf(text) !== -1)
        }
      }else if(pair[0] === 'web' || pair[0] === 'pc'){
        if (pair[1]){
          temporaryGames = temporaryGames.filter(game => game.platform.toLowerCase().indexOf(pair[0]) !== -1)
        }
      }else if(pair[0] === 'genre'){
        temporaryGames = temporaryGames.filter(game => game.genre.toLowerCase() === pair[1].toString().toLowerCase().replace('-', ' '));
      }else if(typeof pair[1] === 'boolean'){
        // o pair[0] é usado como chave para o choices e escolher qual atributo filtrar
        // favorito, querendo_jogar, etc.
        // Depois disso é só aplicar o filtro utilizando o valor dessa choice
        temporaryGames = aplyFilter(choices[pair[0] as ToggleFilterTypes], temporaryGames);
      }
    }
    return temporaryGames.filter((game, id) => id < page * 20);

    function aplyFilter(choice: Choice, array: Game[]): Game[]{
      return array.filter(game => choice.value[game.id]);
    }
  }

  return (
    <div>
      <Filter />
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
