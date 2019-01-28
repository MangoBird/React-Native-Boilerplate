import React, { Component, RefObject } from 'react';
import { Icon } from 'react-native-elements';
import { IScreen } from '../../common/interfaces';
import { NavBtn, NavText, NavWrap } from './FooterStyles';

export class Footer extends Component<IScreen, any> {
  public render() {
    return (
      <NavWrap>
        <NavBtn
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}
        >
          <Icon
            type="feather"
            name="book-open"
            color={
              this.props.navigation.state.routeName === 'Home'
                ? '#000'
                : '#eaeaea'
            }
          />
          <NavText isActive={this.props.navigation.state.routeName === 'Home'}>
            학습
          </NavText>
        </NavBtn>
        <NavBtn
          onPress={() => {
            this.props.navigation.navigate('Store');
          }}
        >
          <Icon
            type="materialicons"
            name="local-grocery-store"
            color={
              this.props.navigation.state.routeName === 'Store'
                ? '#000'
                : '#eaeaea'
            }
          />
          <NavText isActive={this.props.navigation.state.routeName === 'store'}>
            상점
          </NavText>
        </NavBtn>
        <NavBtn
          onPress={() => {
            this.props.navigation.navigate('Statistics');
          }}
        >
          <Icon
            type="entypo"
            name="pie-chart"
            color={
              this.props.navigation.state.routeName === 'Statistics'
                ? '#000'
                : '#eaeaea'
            }
          />
          <NavText
            isActive={this.props.navigation.state.routeName === 'Statistics'}
          >{`통계`}</NavText>
        </NavBtn>
        <NavBtn
          onPress={() => {
            this.props.navigation.navigate('Settings');
          }}
        >
          <Icon
            type="feather"
            name="settings"
            color={
              this.props.navigation.state.routeName === 'Settings'
                ? '#000'
                : '#eaeaea'
            }
          />
          <NavText
            isActive={this.props.navigation.state.routeName === 'Settings'}
          >
            설정
          </NavText>
        </NavBtn>
      </NavWrap>
    );
  }
}
