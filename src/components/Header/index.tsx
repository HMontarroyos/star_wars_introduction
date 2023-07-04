import * as S from "./styled";
import { logo } from "../../assets/images";
import { useRef } from "react";

function Header(): JSX.Element {
  const hoverableRef = useRef<HTMLAnchorElement>(null);
  return (
    <S.Container>
      <S.LinkRedirect to={"/"} ref={hoverableRef}>
        <S.Logo src={logo} />
      </S.LinkRedirect>
    </S.Container>
  );
}

export default Header;
