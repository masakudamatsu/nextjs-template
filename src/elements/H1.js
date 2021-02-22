import styled from 'styled-components';
import {fontCssGenerator} from 'src/utils/getFontCss';
import {font} from 'src/utils/specFont';
import {h1} from 'src/utils/specLayout';
import remify from 'src/utils/remify';

const H1 = styled.h1`
  ${fontCssGenerator(font.h1)}
  padding-bottom: ${remify(h1.whitespace.belowH1)};
  padding-top: ${remify(h1.whitespace.aboveH1)};
`;

export default H1;
