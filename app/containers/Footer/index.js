import React from 'react';
import Emoji from 'react-native-emoji';

import {
  Container,
  TextContainer,
  Image,
} from './styles';

const PGSLogo = require('../../assets/image/pgs-black.png');

const Footer = () => (
  <Container>
    <TextContainer>
      Made with <Emoji name="heart"/> by
    </TextContainer>
    <Image
      source={PGSLogo}
      resizeMode="contain"
    />
    <TextContainer>
      and GM.
    </TextContainer>
  </Container>
);

export default Footer;
