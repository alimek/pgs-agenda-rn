import React from 'react';
import PropTypes from 'prop-types';
import ReactNative from 'react-native';

import { AgendaItem } from '../../components';

const {
  FlatList,
} = ReactNative;

const Agenda = ({ data }) => (
  <FlatList
    data={data}
    renderItem={({ item }) => <AgendaItem item={item}/>}
    keyExtractor={(item, index) => index}
  />
);

Agenda.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Agenda;
