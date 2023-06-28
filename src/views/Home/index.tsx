import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { getFilms } from "../../server/index";
import { Loading } from "../../components";

const Home: React.FC = () => {
  const [films, setFilms] = useState(" ");

  useEffect(() => {
    async function fetchFilms(): Promise<void> {
      try {
        const _films = await getFilms();
        setFilms(_films);
      } catch (error) {
        console.error(error);
      }
    }
    fetchFilms();
  }, []);
  return <>{console.log("FILMs", films)}</>;
};

export default Home;
