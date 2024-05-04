import { useState, useEffect } from "react";

const parseLocalStorage = (key: string) => {
  const parsedData = JSON.parse(localStorage.getItem(key)!);

  if (parsedData === null) {
    localStorage.setItem(key, "[]");
    return [];
  }

  return parsedData;
};

const storeInLocalStorage = <T>(key: string, value: T | T[]) => {
  localStorage.setItem(key, JSON.stringify(value));
};

//custom hook for getting and setting item in localStorage
export default function useLocalStorage<T>(key: string) {
  const [data, setData] = useState<T>(parseLocalStorage(key));

  useEffect(() => {
    storeInLocalStorage(key, data);
  }, [data]);

  return [data, setData] as const;
}
