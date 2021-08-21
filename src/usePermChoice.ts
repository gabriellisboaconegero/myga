import { usePermState } from "./usePermState";

export type ChoiceType = Record<number, boolean>;

export const usePermChoice = (type: string): [ChoiceType, (idToAdd: number) => void] => {
  const [choices, setChoices] = usePermState<ChoiceType>(type, {});

  function toggleChoice(idToAdd: number){
    setChoices(prev => {
      console.log(choices, 'choices');
      console.log(prev, 'prev');
      console.log(idToAdd, !prev[idToAdd], 'new');
      return {
        ...prev,
        [idToAdd]: !prev[idToAdd]
      }
    });
  }

  return [choices, toggleChoice];
}