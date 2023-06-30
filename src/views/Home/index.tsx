import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { getFilms } from "../../server/index";
import { Loading, Poster } from "../../components";
import { PostersStarWarsFilms } from "../../global/const";

const Home: React.FC = () => {
  const [films, setFilms] = useState<any>();

  const getImagePoster = (title: string) => {
    const keys = Object.keys(PostersStarWarsFilms);

    const formattedTitle = title.replace(/\s+/g, "");

    for (const key of keys) {
      const formattedKey = key.replace(/\s+/g, "");

      if (formattedTitle.toLowerCase().includes(formattedKey.toLowerCase())) {
        return PostersStarWarsFilms[key];
      }
    }

    return PostersStarWarsFilms.No_Image;
  };

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
  return (
    <>
      {films ? (
        <S.ContainerPosters>
          {films
            .sort((a: any, b: any) => a.episode_id - b.episode_id)
            .map((film: any) => (
              <S.LinkRedirect
                to={`/film/${film.url.split("/").filter(Boolean).pop()}`}
              >
                <Poster
                  image={getImagePoster(film.title)}
                  description={film.title}
                />
              </S.LinkRedirect>
            ))}
        </S.ContainerPosters>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Home;
