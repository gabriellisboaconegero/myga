import React from 'react';
import { useState } from 'react';
import { Filter } from '../components/Filter';
import { GameCard } from '../components/GameCard';
import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';
import { Choice, Game, ToggleFilterTypes } from '../gamesContext';
import { useGames } from '../useGames';
import { GamesListWrapper, HomeWrapper, PaginationContainer } from './styles';
import {BsChevronLeft, BsChevronRight, BsChevronBarLeft, BsChevronBarRight, BsChevronCompactRight} from 'react-icons/bs';
import { ShowFiltersButton } from '../components/styles';

export const Home:React.FC = () => {
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const {gamesRaw, filters, choices, medals} = useGames();

  function games(){
    console.log(filters);
    let temporaryGames = gamesRaw;
    
    // Para cada filtro aplicar uma lógica
    // Por ser o único diferente o tipo text tem tratamento especial
    // Ja os outros são todos, boolean são tratados iguais
    for (let filterEntries of Object.entries(filters)){
      // filterEntries[0] == key: string (tipo de filtro)
      // filterEntries [1] == value: string | boolean (valor do filtro, ou seja)
      // filterEntries[0] == text filterEntries[1] == string
      // filterEntries[0] != text filterEntries[1] == boolean
      if (filterEntries[0] === 'text'){
        let text = filters.text.toString();
        if (text.startsWith('#')){
          if (text.length > 1){
            temporaryGames = temporaryGames.filter(game => game.id.toString() === text.slice(1))
            break;
          } 
        } else{
          temporaryGames = temporaryGames.filter(game => game.title.toLowerCase().indexOf(text) !== -1)
        }
      }else if(filterEntries[0] === 'web' || filterEntries[0] === 'pc'){
        if (filterEntries[1]){
          temporaryGames = temporaryGames.filter(game => game.platform.toLowerCase().indexOf(filterEntries[0]) !== -1)
        }
      }else if(filterEntries[0] === 'genre'){
        if (filterEntries[1] === 'all') continue
        temporaryGames = temporaryGames.filter(game => game.genre.toLowerCase() === filterEntries[1].toString().toLowerCase().replace('-', ' '));
      }else if(filterEntries[0] === 'medal'){
        if (filterEntries[1] === 'all') continue
        temporaryGames = temporaryGames.filter(game =>{
          return parseInt(`${medals[game.id]}`) === filterEntries[1]
        })
      }else if(typeof filterEntries[1] === 'boolean' && filterEntries[1]){
        // o filterEntries[0] é usado como chave para o choices e escolher qual atributo filtrar
        // favorito, querendo_jogar, etc.
        // Depois disso é só aplicar o filtro utilizando o valor dessa choice
        temporaryGames = aplyFilter(choices[filterEntries[0] as ToggleFilterTypes], temporaryGames);
      }
    }
    return temporaryGames.filter((game, id) => id < page * 20);

    function aplyFilter(choice: Choice, array: Game[]): Game[]{
      return array.filter(game => choice.value[game.id]);
    }
  }

  return (
    <div>
      <Filter open={open} />
      <main>
        <ShowFiltersButton className='openButton' onClick={e => setOpen(!open)} title="Filtros">
          <BsChevronCompactRight />  
        </ShowFiltersButton>
        <Header />
        <HomeWrapper>
          <SearchBar />
          <GamesListWrapper>
            {games().map(game => {
              return (
                <GameCard key={game.title} game={game} />
              );
            })}
          </GamesListWrapper>
        </HomeWrapper>
        <PaginationContainer>
            <button
              onClick={e => setPage(1)}
              disabled={page === 1}
            >
              <BsChevronBarLeft />
            </button>
            <button
              onClick={e => setPage(prev => prev - 1)}
              disabled={page === 1}
            >
              <BsChevronLeft />
            </button>
            <span>
              {page}
            </span>
            <button
              onClick={e => setPage(prev => prev + 1)}
              disabled={page >= Math.floor(gamesRaw.length / 20) + 1}
            >
              <BsChevronRight /> 
            </button>
            <button
              onClick={e => setPage(Math.floor(gamesRaw.length / 20) + 1)}
              disabled={page >= Math.floor(gamesRaw.length / 20) + 1}
            > 
              <BsChevronBarRight />
            </button>
          </PaginationContainer>
      </main>
    </div>
  );
}
