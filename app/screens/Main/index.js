import React, { Component } from 'react';
import ReactNative from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import moment from 'moment';

import {
  Agenda,
  Footer,
} from '../../containers';

import {
  MainContainer,
  ImageContainer,
  Image,
} from './styles';

const {
  Dimensions,
} = ReactNative;
const AgendaData = require('../../assets/agenda.json');
const PGSLogo = require('../../assets/image/pgs-white.png');

class MainScreen extends Component {

  constructor() {
    super();

    const now = moment();
    let todayIndex = null;

    switch (parseInt(now.format('D'), 10)) {
      case 23:
        todayIndex = 1;
        break;
      case 24:
        todayIndex = 2;
        break;
      default:
        todayIndex = 0;
        break;
    }

    this.state = {
      index: todayIndex,
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
  }

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
        <ImageContainer>
          <Image
            source={PGSLogo}
          />
        </ImageContainer>
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
