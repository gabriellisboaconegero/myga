import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useGames } from '../useGames';
import {GiOrbWand} from 'react-icons/gi';
import {BsController} from 'react-icons/bs';
import { HeaderWrapper, LinkPage } from './styles';

export const Header: React.FC = () => {
  const {gamesRaw, jogoFavorito, clearFilters} = useGames();
  const location = useLocation();
  const history = useHistory();
  const isProfile = location.pathname === '/profile'
  
  function goPath(){
    history.push(isProfile? '/' : '/profile');
    clearFilters();
  }
  return(
    <HeaderWrapper>
      <h1>Myga <span>my games</span></h1>
      <LinkPage onClick={e => goPath()}>
        {gamesRaw[jogoFavorito] && isProfile? <GiOrbWand/> : <BsController/>}
        <span>{isProfile? 'Ir para a lista': 'Ir para os status'}</span>
      </LinkPage>
    </HeaderWrapper>
  )
}