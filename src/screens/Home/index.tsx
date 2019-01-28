import React, { Component } from 'react';
import { DefaultText, Footer } from '../../common/component';
import { IScreen } from '../../common/interfaces';
import { Body, Header, HomeWrap, Title } from './styles';

class Home extends Component<IScreen, any> {
  public render() {
    return (
      <HomeWrap>
        <Header>
          <Title>Your Title</Title>
        </Header>
        <Body>
          <DefaultText fontSize={24}>Welcome to React Native</DefaultText>
        </Body>
        <Footer navigation={this.props.navigation} />
      </HomeWrap>
    );
  }
}

export default Home;
