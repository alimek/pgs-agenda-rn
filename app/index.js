import ReactNative from 'react-native';
import { Navigation } from 'react-native-navigation';

import screenRegister from './screen-register';

const { StatusBar } = ReactNative;

screenRegister();
StatusBar.setBarStyle('light-content');

export default () => Navigation.startSingleScreenApp({
  screen: {
    screen: 'pgs.main',
    title: 'Trip Agenda 2017',
    navigatorStyle: {
      navBarTextColor: '#FFF',
      navBarBackgroundColor: '#ff7626',
      navBarNoBorder: true,
    }
  }
});
