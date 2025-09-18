import * as S from "./styled";
import { loadingImage } from "../../assets/images";

function Loading() {
  return (
    <S.Container>
      <S.Image src={loadingImage} alt={"loading"} />
    </S.Container>
  );
}

export default Loading;
