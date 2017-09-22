import styled from 'styled-components/native';

export const Container = styled.View`
  border-bottom-width: 1px;
  border-color: #dedede;
  ${
    props => 
      props.inPast ? 
      `
        opacity: 0.6;
        background-color: #E9E9E9;
      ` : ''
  };
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
  padding-bottom: ${props => props.padding ? 5 : 0}px; 
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

export const StatusContainer = styled.View`
  background-color: ${props => props.isSoon ? 'rgba(255, 119, 38, 0.5)' :'#ff7626'};
  width: 50px;
  height: 20px;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 10px;
`;

export const StatusText = styled.Text`
  color: white;
  font-size: 10px;
  font-weight: bold;
`;
