import {css} from 'styled-components';

import {scale} from './specFont';
import {mediaQuery} from './mediaQuery';
import remify from './remify';

export function fontCssGenerator(
  capheight,
  typeface,
  xheight = null,
  betweenLine = null,
) {
  return css`
    font-family: ${typeface.fontFamily};
    font-size: ${remify(capHeightToBe(capheight, typeface))};
    font-weight: ${typeface.fontWeight};
    line-height: ${xheight && betweenLine
      ? lineHeightToBe(xheight, betweenLine, typeface)
      : 'normal'};
    @media only screen and ${mediaQuery.font} {
      font-size: ${remify(capHeightToBe(capheight * scale, typeface))};
    }
  `;
}

// helper functions

function capHeightToBe(px, fontMetrics) {
  const capHeightToFontSize = capHeight =>
    (capHeight / fontMetrics.capHeight) * fontMetrics.unitsPerEm;
  return capHeightToFontSize(px);
}

function xHeightToBe(px, fontMetrics) {
  const xHeightToFontSize = xHeight =>
    (xHeight / fontMetrics.xHeight) * fontMetrics.unitsPerEm;
  return xHeightToFontSize(px);
}

function lineHeightToBe(xHeightPx, spaceBetweenPx, fontMetrics) {
  const lineHeight = xHeightPx + spaceBetweenPx;
  return lineHeight / xHeightToBe(xHeightPx, fontMetrics);
}
