import { isIphoneX } from 'react-native-iphone-x-helper';
import styled from 'styled-components';
export const HomeWrap = styled.View`
  height: 100%;
  flex-direction: column;
`;

export const Header = styled.View`
  width: 100%;
  padding: ${isIphoneX() ? '48px 16px 16px' : '16px'};
  flex-direction: column;
  justify-content: space-between;
  background-color: #fbfbfb;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.23);
  z-index: 10;
  /* margin-bottom: 20px; */
`;

export const Body = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  margin: 0px auto 10px auto;
  font-size: 25px;
  font-weight: bold;
`;
