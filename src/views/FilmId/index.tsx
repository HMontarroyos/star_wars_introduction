import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { getFilmById } from "../../server/index";
import { Loading, StarWarIntro } from "../../components";
import { useParams } from "react-router-dom";

const FilmId: React.FC = () => {
  const [film, setFilm] = useState<any>();
  const { id } = useParams<{ id: string }>();


  useEffect(() => {
    async function fetchFilms(): Promise<void> {
      try {
        const _film = await getFilmById(id)
        setFilm(_film);
      } catch (error) {
        console.error(error);
      }
    }
    fetchFilms();
  }, []);
  return (
    <>
    {console.log("FILM", film)}
      {film ? (
        <>
          <StarWarIntro description={film.opening_crawl} />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default FilmId;
