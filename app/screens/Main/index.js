import React, { Component } from 'react';
import ReactNative from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

import {
  Agenda,
  Footer,
} from '../../containers';

import {
  MainContainer,
} from './styles';

const {
  Dimensions,
} = ReactNative;
const PGSLogo = require('../../assets/image/pgs-white.png');
const AgendaData = require('../../assets/agenda.json');

class MainScreen extends Component {
  static navigatorButtons = {
    leftButtons: [
      {
        icon: PGSLogo,
        disableIconTint: true,
        id: 'fakeButton',
        buttonColor: 'white',
        disabled: true,
      }
    ]
  };

  state = {
    index: 1,
    routes: [
      {
        key: 'friday',
        title: 'Friday',
      },
      {
        key: 'saturday',
        title: 'Saturday',
      },
      {
        key: 'sunday',
        title: 'Sunday',
      },
    ],
  };

  handleIndexChange = index => this.setState({ index });

  renderHeader = props => <TabBar
    tabStyle={{
      backgroundColor: '#ff7626',
    }}
    style={{
      backgroundColor: '#ff7626',
    }}
    labelStyle={{
      fontSize: 16,
      fontWeight: 'bold',
    }}
    pressColor="#ff7626"
    {...props}
  />;

  renderScene = SceneMap({
    friday: () => <Agenda data={AgendaData.friday} />,
    saturday: () => <Agenda data={AgendaData.saturday} />,
    sunday: () => <Agenda data={AgendaData.sunday} />,
  });

  render() {
    return (
      <MainContainer>
        <TabViewAnimated
          style={{ flex: 1 }}
          navigationState={this.state}
          renderScene={this.renderScene}
          renderHeader={this.renderHeader}
          onIndexChange={this.handleIndexChange}
          initialLayout={{
            height: 0,
            width: Dimensions.get('window').width,
          }}
        />
        <Footer />
      </MainContainer>
    );
  }
}

export default MainScreen;
