import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { filmSchema, FilmFormData } from "../../model/filmSchema";
import * as S from "./styled";

type NewFilmModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: FilmFormData) => void;
};

const NewFilmModal: React.FC<NewFilmModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FilmFormData>({
    resolver: zodResolver(filmSchema),
  });

  if (!isOpen) return null;

  return (
    <S.Backdrop>
      <S.ModalContainer>
        <h2>Novo Filme</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Título:
            <input type="text" {...register("title")} />
            {errors.title?.message && (
              <span>{String(errors.title.message)}</span>
            )}
          </label>

          <label>
            Texto de abertura:
            <textarea rows={5} {...register("opening_crawl")} />
            {errors.opening_crawl?.message && (
              <span>{String(errors.opening_crawl.message)}</span>
            )}
          </label>

          <label>
            Imagem do Filme:
            <input type="file" {...register("image")} accept="image/*" />
            {errors.image?.message && (
              <span>{String(errors.image.message)}</span>
            )}
          </label>

          <S.Buttons>
            <button type="button" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit">Salvar</button>
          </S.Buttons>
        </form>
      </S.ModalContainer>
    </S.Backdrop>
  );
};

export default NewFilmModal;
