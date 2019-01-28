import styled from 'styled-components';

// ===========================================
// ==============Footer Section===============
// ===========================================
export const NavWrap = styled.View`
  height: 60px;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #fbfbfb;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.23);
  z-index: 10;
`;

export const NavBtn = styled.TouchableOpacity`
  width: 25%;
  height: 100%;
  color: black;
  justify-content: center;
  align-items: center;
`;

export const NavText = styled.Text`
  text-align: center;
  font-size: 12px;
  color: ${({ isActive }: any) => (isActive ? '#000' : '#eaeaea')};
`;
