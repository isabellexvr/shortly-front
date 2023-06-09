import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      //tenta achar o item no localstorage pelo key fornecido
      //caso não ache, armazena o valor fornecido no estado storedValue
      //caso ache, retorna o conteúdo achado em JSON
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  //a função que ele retorna para setar o estado recebe um value em que, se for uma função, manda como argumento o valor a ser storado para ela
  //o novo valor é setado no estado e então no localStorage
  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
