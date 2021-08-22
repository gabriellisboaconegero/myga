import React, { createContext, useEffect, useState } from "react";
import axios, { AxiosResponse } from 'axios';
import { usePermChoice } from "./usePermChoice";
import { usePermState } from "./usePermState";
import {
  FaChessBishop,
  FaChessPawn,
  FaChessKing,
  FaChessKnight,
  FaChessQueen,
  FaChessRook
} from 'react-icons/fa';

//#region Context types
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
  addFilter: (type: FilterTypes, filter: FilterValues) => void;
  filters: Filters;
  choices: Choices;
  avaliar: (medalType: string, game_id: number) => void;
  medals: Medals;
  jogoFavorito: number;
  marcarComoFavorito: (game_id: number) => void;
  acessados: Record<number, boolean>;
  acessar: (game_id: number) => void;
}
//#endregion

//#region Choice types
export type ChoiceValue = Record<number, boolean>;

export type Choice = {
  value: ChoiceValue;
  toggle: (idToAdd: number) => void;
}

type Choices = Record<ToggleFilterTypes, Choice>
//#endregion

//#region Filter types
export type ToggleFilterTypes = 'quero_jogar' | 'jogando' | 'favorito' | 'ja_joguei' | 'zerei';

type FilterTypes = ToggleFilterTypes | 'genre' | 'pc' | 'web' | 'text' | 'medal';

type FilterValues = string | boolean | string[];

type Filters = Record<FilterTypes, FilterValues>;
//#endregion

type Medals = Record<number, string>;

export const gamesContext = createContext({} as ContextType);

export const medalsList: Record<string, JSX.Element> = {
  1: <FaChessPawn />,
  2: <FaChessRook />,
  3: <FaChessKnight />,
  4: <FaChessQueen />,
  5: < FaChessKing />
}

export const GamesProvider: React.FC = ({children}) => {  
  useEffect(() => {
    fetchGames();
  }, []);

  const [gamesRaw, setGamesRaw] = useState<Game[]>([]);
  const [filters, setFilters] = useState<Filters>({} as Filters);
  const [favorito, toggleFavorito] = usePermChoice('favoritos');
  const [queroJogar, toggleQueroJogar] = usePermChoice('queroJogar');
  const [jogando, toggleJogando] = usePermChoice('jogando');
  const [jaJoguei, toggleJaJoguei] = usePermChoice('jaJoguei');
  const [zerei, toggleZerei] = usePermChoice('zerei');
  const [medals, setMedals] = usePermState<Medals>('avaliacoes', {} as Medals);
  const [jogoFavorito, setJogoFavorito] = usePermState('jogoFavorito', -1);
  const [acessados, setAcessados] = usePermState<Record<number, boolean>>('acessados',  {});

  async function fetchGames(){
    const res: AxiosResponse<GameAPI[]> = await axios.request({
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      headers: {
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_GAME_API_KEY,
        'Access-Control-Allow-Origin': '*'
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
          quero_jogar: queroJogar[game.id],
          jogando: jogando[game.id],
          ja_joguei: jaJoguei[game.id],
          zerei: zerei[game.id],
          favorito: favorito[game.id],
        }
      })
    }
  }

  // O add filter adiciona ao objeto o nome do filtro (texte, jogando, etc.) como key e um boolean como valor
  function addFilter(type: FilterTypes, filter: FilterValues){
    setFilters(prev => {
      return {
        ...prev,
        [type]: filter
      }
    })
  }

  function avaliar(medalType: string, game_id: number){
    setMedals(prev => {
      return {
        ...prev,
        [game_id]: medalType
      }
    })
  }

  function marcarComoFavorito(game_id: number){
    setJogoFavorito(game_id - 1);
  }

  function acessar(game_id: number){
    setAcessados(prev => {
      return {
        ...prev,
        [game_id]: true
      }
    })
  }

  const choices: Choices = {
    favorito: {
      value: favorito,
      toggle: toggleFavorito
    },
    quero_jogar: {
      value: queroJogar,
      toggle: toggleQueroJogar
    },
    jogando: {
      value: jogando,
      toggle: toggleJogando
    },
    ja_joguei: {
      value: jaJoguei,
      toggle: toggleJaJoguei
    },
    zerei: {
      value: zerei,
      toggle: toggleZerei
    }
  }

  const contextValues: ContextType = {
    gamesRaw,
    addFilter, 
    filters,
    choices,
    avaliar,
    medals,
    jogoFavorito,
    marcarComoFavorito,
    acessados,
    acessar
  }

  return (
    <gamesContext.Provider value={contextValues}>
      {children}
    </gamesContext.Provider>
  )
}