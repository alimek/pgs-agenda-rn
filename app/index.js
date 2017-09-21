import { Navigation } from 'react-native-navigation';

import screenRegister from './screen-register';

screenRegister();

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
