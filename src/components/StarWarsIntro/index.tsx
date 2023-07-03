import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { Crawl } from "../../components";
import { convertToRoman } from "../../utils";
import { logo } from "../../assets/images";
import { useNavigate } from "react-router-dom";

type StarWarsIntroProps = {
  description: any;
  subTitle: string;
  numberEpisode: number;
};

const StarWarsIntro = ({
  description,
  subTitle,
  numberEpisode,
}: StarWarsIntroProps) => {
  const [showIntro, setShowIntro] = useState(true);
  const [showLogo, setShowLogo] = useState(true);
  const [audioStarted, setAudioStarted] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [fade, setFade] = useState(false);
  const navigate = useNavigate();

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

  console.log("numberEpisode", numberEpisode);
  const paragraphs =
    numberEpisode >= 7 ? description : description.split(/(?<=\.)\s{2,}/);
  console.log("PARAGRAFHS", paragraphs);
  useEffect(() => {
    if (!showIntro && audioStarted && !fade) {
      const fadeTimer = setTimeout(() => {
        setFade(true);
      }, 5000);

      return () => clearTimeout(fadeTimer);
    }
  }, [showIntro, audioStarted, fade]);

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate("/");
    }, 90000);

    return () => clearTimeout(redirectTimer);
  }, [navigate]);

  return (
    <>
      {showIntro ? (
        <S.TextIntro>
          A Long Time Ago, in a galaxy far,
          <br />
          far away ...
        </S.TextIntro>
      ) : null}

{/* {showLogo ? (
        <S.ContainerLogo>
          <S.Logo src={logo} />
        </S.ContainerLogo>
      ) : null} */}

      {!showIntro /* && !showLogo */ && (
        <>
                <S.ContainerLogo>
          <S.Logo src={logo} />
        </S.ContainerLogo>
        
        <Crawl
          title={`Episode ${convertToRoman(numberEpisode)}`}
          subTitle={subTitle}
          paragraphs={paragraphs}
        />
        </>
      )}
    </>
  );
};

export default StarWarsIntro;
