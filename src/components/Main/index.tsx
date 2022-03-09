import * as S from './styles';

import Button from '../Button';
import { CurrentLocation } from '@styled-icons/boxicons-regular';

const Main = () => (
  <S.Wrapper>
    <S.MainInfo>
      <Button>Search for places</Button>
      <Button icon={<CurrentLocation />} />
    </S.MainInfo>
    <S.WeatherInfo>
      <S.WeatherIcon
        src="/img/shower.png"
        alt="Imagem de um átomo e React Avançado escrito ao lado"
      />
      <S.Temperature>
        15<span>ºC</span>
      </S.Temperature>
      <S.WeatherStatus>Shower</S.WeatherStatus>
      <S.VStack>
        <S.WeatherLocation>Today . Fri, 5 Jun</S.WeatherLocation>
        <S.WeatherLocation>Helsinki</S.WeatherLocation>
      </S.VStack>
    </S.WeatherInfo>
  </S.Wrapper>
);

export default Main;
