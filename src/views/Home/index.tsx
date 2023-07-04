import React, { useContext, useEffect, useState } from "react";
import * as S from "./styled";
import FilmContext from "../../global/context";
import { PostersStarWarsFilms } from "../../global/const";
import { Loading, Poster } from "../../components";

const Home: React.FC = () => {
  const { films } = useContext(FilmContext);

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
