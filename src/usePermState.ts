import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Response<S> = [
  S,
  Dispatch<SetStateAction<S>>
]

export function usePermState<T>(key: string, valueInput: T): Response<T>{

  const [value, setValue] = useState<T>(() => {
    const inStorage = window.localStorage.getItem(key);
    console.log(inStorage)
    if (inStorage !== null){
      return JSON.parse(inStorage) as T;
    }
    return valueInput;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}