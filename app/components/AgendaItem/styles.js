import styled from 'styled-components/native';

export const Container = styled.View`
  border-bottom-width: 1px;
  border-color: #dedede;
`;

export const DateContainer = styled.View`
  flex-direction: row;
`;

export const DateText = styled.Text`
  font-size: 12px;
  color: grey;
  flex: 1;
`;

export const NameText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 3px;
`;

export const OwnerText = styled.Text`
  color: grey;
  font-size: 10px;
  text-align: right;
`;

export const OwnerContainer = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: flex-end;
`;

export const OwnerLabel = styled.Text`
  font-weight: bold;
  color: black;
  margin-right: 3px;
  font-size: 10px;
`;

export const TimeContainer = styled.View`
  flex-direction: row;
`;

export const TimeText = styled.Text`
  font-size: 10px;
  color: grey;
`;

export const PlaceText = styled.Text`
  color: grey;
  font-size: 10px;
  text-align: right;
`;

export const AttractionLabel = styled.Text`
  padding: 5px 10px;
  color: grey;
  font-size: 10px;
  background-color: #f3f3f3;
`;

export const Content = styled.View`
  padding: 10px;
`;
