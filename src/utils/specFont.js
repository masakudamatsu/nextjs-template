export const poppins = {
  light: {
    fontFamily: "'Poppins', Verdana, sans-serif",
    fontWeight: 300,
    unitsPerEm: 1000,
    xHeight: 546,
    capHeight: 700,
  },
  thin: {
    fontFamily: "'Poppins', Verdana, sans-serif",
    fontWeight: 100,
    unitsPerEm: 1000,
    xHeight: 540,
    capHeight: 702,
  },
}; // Measured with https://opentype.js.org/font-inspector.html

// Scale factor to enlarge fonts beyond the tablet screen width of 728px
export const scale = 1.2;
export const breakpointForFont = 728;

// Type scales
export const typescale = {
  test: {
    capHeight: poppins.thin.capHeight / 10,
    xHeightRatio: 5,
    betweenLinesRatio: 6,
    textCropEm: {
      top: -0.249,
      bottom: -0.255,
    },
    fontMetrics: poppins.thin,
  },
};

// Assign type scales to components
export const font = {
  h1: typescale.test,
  textCropper: typescale.test,
};
