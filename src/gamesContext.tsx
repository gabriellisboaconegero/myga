import React, { createContext, useEffect, useState } from "react";
import axios, { AxiosResponse } from 'axios';

type GameAPI = {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  developer: string;
  release_date: string;
}

export interface Game extends GameAPI {
  quero_jogar: boolean;
  jogando: boolean;
  ja_joguei: boolean;
  zerei: boolean;
  favorito: boolean;
}

type ContextType ={
  gamesRaw: Game[];
  addFilter: (type: AddFilterTypes, filter: string | boolean) => void;
  filters: Filters;
}

type AddFilterTypes = 'genre' | 'platform' | 'quero_jogar' | 'jogando' | 'favorito' | 'ja_joguei' | 'zerei' | 'text';

type Filters = Record<AddFilterTypes, string | boolean>;

export const gamesContext = createContext({} as ContextType);

export const GamesProvider: React.FC = ({children}) => {
  
  useEffect(() => {
    fetchGames();
  }, []);

  const [gamesRaw, setGamesRaw] = useState<Game[]>([]);
  const [filters, setFilters] = useState<Filters>({} as Filters);

  async function fetchGames(){
    const res: AxiosResponse<GameAPI[]> = await axios.request({
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      headers: {
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_GAME_API_KEY
      }
    });

    const dadosArrumados = arrumarDados();
    
    setGamesRaw(prev => {
      return [...prev, ...dadosArrumados]
    });


    function arrumarDados(): Game[]{
      return res.data.map((game): Game => {
        return {
          ...game,
          quero_jogar: false,
          jogando: false,
          ja_joguei: false,
          zerei: false,
          favorito: false
        }
      })
    }
  }

  function addFilter(type: AddFilterTypes, filter: string | boolean){
    setFilters(prev => {
      return {
        ...prev,
        [type]: filter
      }
    })
  }

  return (
    <gamesContext.Provider value={{gamesRaw, addFilter, filters}}>
      {children}
    </gamesContext.Provider>
  )
}