import React, { useEffect, useRef, useState } from "react";
import * as S from "./styled";

type StarWarsIntroProps = {
  description: string;
};

const StarWarsIntro = ({ description }: StarWarsIntroProps) => {
  const paragraphs = description.split(/(?<=\.)\s{2,}/);

  return (
    <>
      <S.TextIntro>
        A Long Time Ago, in a galaxy far,
        <br />
        far away ...
      </S.TextIntro>
      <S.ContainerParagraph>
        {paragraphs.map((paragraph, idx) => (
          <>
            <S.Paragraph key={idx}>{paragraph}</S.Paragraph>
            <br />
          </>
        ))}
      </S.ContainerParagraph>
    </>
  );
};

export default StarWarsIntro;
