import { Navigation } from 'react-native-navigation';

import MainScreen from './screens/Main';

export default () => {
  Navigation.registerComponent('pgs.main', () => MainScreen);
};
