import React from "react";
import { useState } from "react";
import { BsBookmarkFill } from "react-icons/bs";
import { ToggleFilterTypes } from "../gamesContext";
import { useGames } from "../useGames";
import { ButtonFilter } from "./styles";

type Props = {
  keyProp: string;
}

export const CheckboxFilter: React.FC<Props> = ({keyProp}) => {
  const {setFilter} = useGames();
  const [checked, setChecked] = useState(false);

  return (
    <ButtonFilter checked={checked} onClick={e => {
      setFilter(keyProp as ToggleFilterTypes, !checked);
      setChecked(!checked);
    }}>
      <BsBookmarkFill />
      <span>{keyProp !== 'pc' || 'web'? keyProp.replace('_', ' '): keyProp}</span>
    </ButtonFilter>
  )
}