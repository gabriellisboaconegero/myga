import { ChoiceValue } from "./gamesContext";
import { usePermState } from "./usePermState";

export const usePermChoice = (type: string): [ChoiceValue, (idToAdd: number) => void] => {
  const [choices, setChoices] = usePermState<ChoiceValue>(type, {});

  function toggleChoice(idToAdd: number){
    setChoices(prev => {
      return {
        ...prev,
        [idToAdd]: !prev[idToAdd]
      }
    });
  }

  return [choices, toggleChoice];
}