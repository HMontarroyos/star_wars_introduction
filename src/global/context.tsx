import React, { createContext, useState, useEffect, ReactNode } from "react";
import { getFilms } from "../server";
import { othersFilmsStarWars } from "../global/const";

interface FilmContextType {
  films: any[] | null;
  setFilms: React.Dispatch<React.SetStateAction<any[] | null>>;
}

interface FilmProviderProps {
  children: ReactNode;
}

const FilmContext = createContext<FilmContextType | undefined>(undefined);

export const FilmProvider: React.FC<FilmProviderProps> = ({ children }) => {
  const [films, setFilms] = useState<any[] | null>(null);

  useEffect(() => {
    async function fetchFilms(): Promise<void> {
      try {
        const _films = await getFilms();
        const combinedFilms = _films.concat(othersFilmsStarWars);
        setFilms(combinedFilms);
      } catch (error) {
        console.error(error);
      }
    }

    if (!films) {
      fetchFilms();
    }
  }, [films]);

  return (
    <FilmContext.Provider value={{ films, setFilms }}>
      {children}
    </FilmContext.Provider>
  );
};

export default FilmContext;
