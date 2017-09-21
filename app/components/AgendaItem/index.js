import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import {
  Container,
  DateContainer,
  DateText,
  NameText,
  OwnerContainer,
  OwnerLabel,
  OwnerText,
  TimeContainer,
  TimeText,
  PlaceText,
  AttractionLabel,
  Content,
  NowContainer,
  NowText,
} from './styles';

const AgendaItem = ({ item }) => {
  const startDate = moment(item.startDate);
  const endDate = moment(item.endDate);
  const timeText = `${startDate.format('HH')}:${startDate.format('mm')}-${endDate.format('HH')}:${endDate.format('mm')}`;

  return (
    <Container
      inPast={moment().isAfter(endDate)}
    >
      {
        item.attraction ?
          <AttractionLabel>Attraction</AttractionLabel>:
          null
      }
      <Content>
        <DateContainer>
          <DateText>{moment(item.startDate).format('LL')}</DateText>
          <TimeContainer>
            <TimeText>{timeText}</TimeText>
          </TimeContainer>
        </DateContainer>
        <NameText
          padding={item.place || item.owner}
        >
          {item.name}
        </NameText>
        {
          item.place ?
            <PlaceText>{item.place}</PlaceText>
            : null
        }
        {
          item.owner ?
            <OwnerContainer>
              <OwnerLabel>Event coordinator:</OwnerLabel>
              <OwnerText>{item.owner}</OwnerText>
            </OwnerContainer>
            : null
        }
      </Content>
      {
        moment().isAfter(startDate) && moment().isBefore(endDate) ?
          <NowContainer>
            <NowText>Now</NowText>
          </NowContainer> :
          null
      }
    </Container>
  );
};

AgendaItem.propTypes = {
  item: PropTypes.shape({
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    owner: PropTypes.string,
    place: PropTypes.string,
    attraction: PropTypes.bool,
  }),
};

export default AgendaItem;
