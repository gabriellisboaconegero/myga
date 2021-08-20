import { useContext } from "react";
import { gamesContext } from "./gamesContext";

export function useGames(){
  return useContext(gamesContext);
}