import React, { useContext, useState } from "react";
import * as S from "./styled";
import FilmContext from "../../global/context";
import { PostersStarWarsFilms } from "../../global/const";
import { Loading, Poster } from "../../components";
import NewFilmModal from "../../components/NewFilmModal";
import { FilmFormData } from "../../model/filmSchema";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const { films, setFilms } = useContext(FilmContext)!;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const getImagePoster = (film: any) => {
    if (film.image) return film.image;

    if (!film.title) return PostersStarWarsFilms.NoImage;

    const formattedTitle = film.title.replace(/\s+/g, "").toLowerCase();

    const foundKey = Object.keys(PostersStarWarsFilms).find((key) => {
      const formattedKey = key.replace(/\s+/g, "").toLowerCase();
      return formattedTitle.includes(formattedKey);
    });

    return foundKey
      ? PostersStarWarsFilms[foundKey]
      : PostersStarWarsFilms.NoImage;
  };

  if (!films) return <Loading />;

  const handleNewFilm = (data: FilmFormData) => {
    const nextId =
      films.length > 0
        ? Math.max(...films.map((f: any) => f.episode_id)) + 1
        : 1;

    let imageUrl = PostersStarWarsFilms.NoImage;

    if (data.image && data.image.length > 0) {
      const file = data.image[0] as File;
      imageUrl = URL.createObjectURL(file);
    }

    const newFilm = {
      title: data.title,
      opening_crawl: data.opening_crawl,
      episode_id: nextId,
      url: `/others/${nextId}`,
      image: imageUrl,
    };

    setFilms([...films, newFilm]);
    setIsModalOpen(false);

    navigate(`/film/${newFilm.url.split("/").pop()}`);
  };

  return (
    <>
      {films ? (
        <S.ContainerPosters>
          {films
            .sort((a: any, b: any) => a.episode_id - b.episode_id)
            .map((film: any) => (
              <S.LinkRedirect
                key={film.url}
                to={`/film/${film.url.split("/").filter(Boolean).pop()}`}
              >
                <Poster image={getImagePoster(film)} description={film.title} />
              </S.LinkRedirect>
            ))}

          <S.NewCard onClick={() => setIsModalOpen(true)}>
            <span>Novo</span>
          </S.NewCard>
        </S.ContainerPosters>
      ) : (
        <Loading />
      )}

      <NewFilmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleNewFilm}
      />
    </>
  );
};

export default Home;
