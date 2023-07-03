import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilmById } from "../../server/index";
import { othersFilmsStarWars } from "../../global/const";
import { Loading, StarWarIntro } from "../../components";

const FilmId: React.FC = () => {
  const [film, setFilm] = useState<any>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    async function fetchFilms(): Promise<void> {
      try {
        const _id = id && parseInt(id);
        if (typeof _id === "number" && _id >= 7) {
          const filmSelected = othersFilmsStarWars.find(
            (filmActual) => filmActual.episode_id === _id
          );
          setFilm(filmSelected);
        } else {
          const _film = await getFilmById(id);
          setFilm(_film);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchFilms();
  }, []);
  return (
    <>
      {film ? (
        <>
          <StarWarIntro
            description={film.opening_crawl}
            subTitle={film.title}
            numberEpisode={film.episode_id}
          />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default FilmId;
