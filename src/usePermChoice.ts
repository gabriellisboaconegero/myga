import { ChoiceValue } from "./gamesContext";
import { usePermState } from "./usePermState";

export const usePermChoice = (type: string): [ChoiceValue, (idToAdd: number) => void] => {
  const [choice, setChoice] = usePermState<ChoiceValue>(type, {});

  function toggleChoice(idToAdd: number){
    setChoice(prev => {
      return {
        ...prev,
        [idToAdd]: !prev[idToAdd]
      }
    });
  }

  return [choice, toggleChoice];
}