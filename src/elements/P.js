import styled from 'styled-components';
import PropTypes from 'prop-types';

import {fontCssGenerator} from 'src/utils/getFontCss';
import {font} from 'src/utils/specFont';

const P = styled.p`
  ${fontCssGenerator(font.paragraph)}
  text-align: ${props => (props.rightAligned ? `right` : `left`)};
`;

P.propTypes = {
  rightAligned: PropTypes.bool,
};

export default P;
