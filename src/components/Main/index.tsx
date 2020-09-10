import * as S from './styles';

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado"
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>TypeScript, ReactJS e Styled Components</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvoldedor de frente para uma tela com código."
    />
  </S.Wrapper>
);

export default Main;
