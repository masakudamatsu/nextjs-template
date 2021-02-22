import styled from 'styled-components';
import PropTypes from 'prop-types';

import {color} from 'src/utils/specColor';
import {font} from 'src/utils/specFont';

const A = styled.a`
  background: ${props =>
    props.backgroundColorOnHover ||
    color.linkText.background.onHover}; /* Fallback */
  background: linear-gradient(
    to bottom,
    transparent 50%,
    currentColor 50%,
    currentColor
  );
  background-position: 0
    ${(
      0.4 +
      font.linkText.fontMetrics.capHeight / font.linkText.fontMetrics.unitsPerEm
    ).toFixed(
      4,
    )}em; /* As text crop sets the link text box's height equal to cap height, 0.4(em) measures the distance between baseline and the link text underline */
  background-repeat: no-repeat;
  background-size: 100% 2px;
  color: ${color.linkText.font};
  cursor: pointer;
  text-decoration: none;
  text-shadow: 0.03em 0
      ${props => props.backgroundColor || color.linkText.background.default},
    -0.03em 0 ${props => props.backgroundColor || color.linkText.background.default},
    0 0.03em
      ${props => props.backgroundColor || color.linkText.background.default},
    0 -0.03em ${props => props.backgroundColor || color.linkText.background.default}; /* following https://eager.io/blog/smarter-link-underlines/ */

  &:visited {
    background: ${props =>
      props.backgroundColorOnHover ||
      color.linkText.background.onHover}; /* fallback */
    background: linear-gradient(
      to bottom,
      transparent 50%,
      currentColor 50%,
      currentColor
    );
    color: inherit;
  }

  &:focus,
  &:hover {
    background: ${props =>
      props.backgroundColorOnHover || color.linkText.background.onHover};
    outline: none;
    text-shadow: none;
  }

  &:active {
    background: none; /* To make it blink */
  }

  &:visited:focus,
  &:visited:hover {
    background: ${props =>
      props.backgroundColorOnHover || color.linkText.background.onHover};
    outline: none;
    text-shadow: none;
  }

  &:visited:active {
    background: none;
  }
`;

A.propTypes = {
  backgroundColor: PropTypes.string,
  backgroundColorOnHover: PropTypes.string,
};

export default A;
