import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from './Home';

const Navigator = createStackNavigator(
  {
    Home: {
      screen: Home
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
);

export default createAppContainer(Navigator);
