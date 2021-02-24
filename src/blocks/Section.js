import styled from 'styled-components';
import PropTypes from 'prop-types';

import A from 'src/elements/A';
import P from 'src/elements/P';

import {font, scale} from 'src/utils/specFont';
import {fontCssGenerator} from 'src/utils/getFontCss';
import {mediaQuery} from 'src/utils/mediaQuery';
import remify from 'src/utils/remify';
import {section} from 'src/utils/specLayout';

const Section = styled.section`
  ${fontCssGenerator(font.section)}

  background-color: ${props => props.backgroundColor || 'inherit'};
  color: ${props => props.fontColor || 'inherit'};
  max-width: 33em; /* One character is on average 0.5em, and 66 is regarded as the ideal number of characters per line (source: http://webtypography.net/2.1.2) */
  width: 100%;
`;

Section.Paragraph = styled(P)``;

Section.Link = styled(A)``;

Section.Whitespace = styled.div`
  height: ${props =>
    props.betweenParagraphs
      ? remify(section.betweenParagraphs)
      : remify(section.betweenSections)};
  width: 100%;
  @media only screen and ${mediaQuery.font} {
    height: ${props =>
      props.betweenParagraphs
        ? remify(section.betweenParagraphs * scale)
        : remify(section.betweenSections * scale)};
  }
`;

Section.propTypes = {
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
};

Section.Whitespace.propTypes = {
  betweenParagraphs: PropTypes.bool,
};

export default Section;
