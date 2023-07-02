import React, { useEffect, useState } from "react";
import * as S from "./styled";

type StarWarsIntroProps = {
  description: string;
};

const StarWarsIntro = ({ description }: StarWarsIntroProps) => {
  const [showIntro, setShowIntro] = useState(true);
  const [audioStarted, setAudioStarted] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showIntro && !audioStarted) {
      const audioInstance = new Audio(require("../../sounds/starwars.mp3"));
      setAudio(audioInstance);
      audioInstance.play();
      setAudioStarted(true);
    }

    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [showIntro, audioStarted, audio]);

  const paragraphs = description.split(/(?<=\.)\s{2,}/);

  useEffect(() => {
    if (!showIntro && audioStarted && !fade) {
      const fadeTimer = setTimeout(() => {
        setFade(true);
      }, 5000);

      return () => clearTimeout(fadeTimer);
    }
  }, [showIntro, audioStarted, fade]);

  return (
    <>
      {showIntro ? (
        <S.TextIntro>
          A Long Time Ago, in a galaxy far,
          <br />
          far away ...
        </S.TextIntro>
      ) : null}

      {!showIntro && (
        <S.ContainerParagraph fade={fade}>
          {paragraphs.map((paragraph, idx) => (
            <React.Fragment key={idx}>
              <S.Paragraph /* style={{ animationDelay: `${idx * 0.5}s` }} */>
                {paragraph}
              </S.Paragraph>
              <br />
            </React.Fragment>
          ))}
        </S.ContainerParagraph>
      )}
    </>
  );
};

export default StarWarsIntro;
