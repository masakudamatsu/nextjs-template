import styled from 'styled-components';
import {fontCssGenerator} from 'src/utils/getFontCss';
import {header} from 'src/utils/specLayout';
import {poppins} from 'src/utils/specFont';

const fontCss = fontCssGenerator(header.h1.height, poppins.thin);

const H1 = styled.h1`
  ${fontCssGenerator(header.h1.height, poppins.thin)}
`;

export default H1;
