import React from "react";
import { medalsList } from "../gamesContext";
import { useGames } from "../useGames";
import {BsBookmarkFill} from 'react-icons/bs';
import { FilterContainer, FilterWrapper, ShowFiltersButton ,ButtonFilter, Button } from "./styles";
import { CheckboxFilter } from "./CheckboxFilter";

type Props = {
  open: boolean;
}

const genres = ['action-rpg', 'fighting', 'fantasy', 'mmo', 'battle-royale', 'card', 'social', 'sports', 'racing',  'moba', 'strategy', 'shooter', 'mmorpg'];

export const Filter: React.FC<Props> = ({open}) => {
  const {setFilter, choices, filters} = useGames();

  return (
    <FilterWrapper className={open? 'open': ''}>
      <h1>Filtros</h1>
      <FilterContainer>
        <h3>Geral</h3>
        <div className="filters">
          {Object.keys(choices).map((key) => {
            return <CheckboxFilter key={key + '_filter'} keyProp={key}/>
          })}
          <CheckboxFilter keyProp="pc" />
          <CheckboxFilter keyProp="web" />
        </div>
      </FilterContainer>

      <FilterContainer>
        <h3>Medalhas</h3>
        <div className='filters'>
          {medalsList.map((icon, avaliacao) => {
            return (
              <ButtonFilter
                key={`medal_filter_${avaliacao}`}
                checked={filters.medal !== undefined? filters.medal === avaliacao: false}
                showSvg
                onClick={e => {
                  setFilter('medal', avaliacao);
                }}
              >
                {icon}
              </ButtonFilter>
            );
          })}
        </div>
        <Button onClick={e => setFilter('medal', 'all')}>
          Limpar filtro
        </Button>
      </FilterContainer>

      <FilterContainer>
        <h3>Gênero</h3>
        <div className="filters">
          {genres.map((genre, id) => {
            return (
              <ButtonFilter
                key={`genre_filter_${id}`}
                checked={filters.genre !== undefined? filters.genre === genre: false}
                onClick={e => {
                  setFilter('genre', genre);
                }}
              >
                <BsBookmarkFill />
                <span>{genre}</span>
              </ButtonFilter>
            )
          })}
        </div>
        <Button onClick={e => setFilter('genre', 'all')}>
          Limpar filtro
        </Button>
      </FilterContainer>

    </FilterWrapper>
  )
}