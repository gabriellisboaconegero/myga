import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useGames } from '../useGames';
import {GiSpellBook, GiOrbWand} from 'react-icons/gi';

export const Header: React.FC = () => {
  const {gamesRaw, jogoFavorito} = useGames();
  const location = useLocation();
  return(
    <header>
      <h1>Myga, meus games</h1>
      <Link to={location.pathname === '/profile'? '/' : '/profile'}>
        {gamesRaw[jogoFavorito] && location.pathname === '/profile'? <GiOrbWand fontSize="40px" /> : <GiSpellBook fontSize="40px" />}
      </Link>
    </header>
  )
}