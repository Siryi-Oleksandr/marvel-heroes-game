import styled from 'styled-components';
import { pallete } from 'helpers/variables';
import * as theme from 'theme';
const { colors } = theme.colors;

export const Card = styled.li`
  position: relative;
  padding: 30px;
  width: 200px;
  height: 300px;
  background-image: linear-gradient(
      to bottom,
      rgba(84, 87, 110, 0.804),
      rgba(106, 111, 144, 0.7)
    ),
    url(${props => props.imgUrl});
  background-color: ${colors.blue[400]};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroSkill = styled.p`
  color: ${pallete.whitesmoke};
  text-align: center;
  font-size: 32px;
  font-family: 'PT Serif';
  font-weight: bold;
  line-height: 1.2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-shadow: 0px -2px 0 #212121, 0px -2px 0 #212121, 0px 2px 0 #212121,
    0px 2px 0 #212121, -2px 0px 0 #212121, 2px 0px 0 #212121, -2px 0px 0 #212121,
    2px 0px 0 #212121, -2px -2px 0 #212121, 2px -2px 0 #212121;
`;
