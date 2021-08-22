import React from "react";
import { useState } from "react";
import { GiTowerFlag } from "react-icons/gi";
import { ToggleFilterTypes } from "../gamesContext";
import { useGames } from "../useGames";
import { CheckboxFilterStyled } from "./styles";

type Props = {
  keyProp: string;
}

export const CheckboxFilter: React.FC<Props> = ({keyProp}) => {
  const {addFilter} = useGames();
  const [checked, setChecked] = useState(false);

  return (
    <CheckboxFilterStyled checked={checked} onClick={e => {
      addFilter(keyProp as ToggleFilterTypes, !checked);
      setChecked(!checked);
    }}>
      <GiTowerFlag />
      <span>{keyProp !== 'pc' || 'web'? keyProp.replace('_', ' '): keyProp}</span>
    </CheckboxFilterStyled>
  )
}