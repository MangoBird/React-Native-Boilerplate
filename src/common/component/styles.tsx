import React from 'react';
import styled from 'styled-components';

type MaterialOctaPixels = 8 | 16 | 24 | 32 | 40 | 48;

export const Container = styled.View`
  background-color: #f5fcff;
  height: 100%;
`;

export interface IDefaultTextProps {
  fontSize: MaterialOctaPixels;
  children: any;
}

const StyledText = styled.Text`
  font-size: ${({ fontSize }: IDefaultTextProps) => `${fontSize}px` || '16px'};
  font-family: Apple SD Gothic Neo;
`;

export const DefaultText = (props: IDefaultTextProps) => {
  return (
    <StyledText fontSize={props.fontSize || 16}>{props.children}</StyledText>
  );
};

export const HorizontalSpacer = styled.View`
  width: 100%;
  height: ${({ height }: any) => `${height}px`};
`;
