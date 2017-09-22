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
  StatusContainer,
  StatusText,
} from './styles';

const isEventInNextHour = (startDate) => {
  const now = moment();
  const diff = startDate.diff(now, 'minutes');

  return diff > 0 && diff < 60;
};

const showStatusContainer = (startDate, endDate) => {
  const now = moment();

  return (
    now.isAfter(startDate) &&
    now.isBefore(endDate)
  ) || isEventInNextHour(startDate);
};

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
          showStatusContainer(startDate, endDate) ?
          <StatusContainer
            isSoon={isEventInNextHour(startDate)}
          >
            <StatusText>{isEventInNextHour(startDate) ? 'Soon' : 'Now'}</StatusText>
          </StatusContainer> :
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
