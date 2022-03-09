import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  color: #fff;
  width: 100%;
  background-color: #1e213a;

  @media (max-width: 880px) {
    flex-direction: column;
  }
`;

export const WeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 53px);
  background-image: url('/img/Cloud-background.png');
  background-repeat: no-repeat;
  background-position: center top;
  padding-top: 86px;

  &::after {
    opacity: 0.5;
  }
`;

export const WeatherIcon = styled.img`
  width: 150px;
  margin-bottom: 40px;
`;

export const Temperature = styled.div`
  width: 192px;
  height: 169px;
  font-size: 144px;
  margin-bottom: 23px;
  color: ${(props) => props.theme.colors.lightGray};

  & span {
    font-size: 72px;
  }
`;

export const WeatherStatus = styled.p`
  color: ${(props) => props.theme.colors.lightGray};
  margin-bottom: 48px;
  font-size: 36px;
`;

export const VStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WeatherLocation = styled.p`
  color: ${(props) => props.theme.colors.darkGray2};
  font-size: 18px;
  margin-bottom: 20px;
`;

export const MainInfo = styled.div`
  display: flex;
  padding: 18px 11px;
  padding-bottom: 0;
  justify-content: space-between;
`;
