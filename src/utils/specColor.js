// Color palette (with Material Design as an example: https://material.io/design/color/the-color-system.html)

const primary = '#6200ee';
const primaryShade = '#3700b3';
const primaryTint = '#bb86fc';

const secondary = '#03dac6'; // should be applied sparingly to accent select parts of your UI (Floating action buttons, Selection controls, like sliders and switches, Highlighting selected text, Progress bars, Links and headlines)
const secondaryShade = '#018786';

const background = '#0a0a0a'; // behind scrollable content
const surface = '#0a0a0a'; // cards, sheets, and menus
const error = 'rgb(254, 254, 50)'; // errors in components, such as invalid text in a text field

// text, iconography, and stroke
const onPrimary = '#ffffff';
const onSecondary = '#000000';
const onBackground = '#ffffff';
const onSurface = '#ffffff';
const onError = '#0a0a0a';

export const color = {
  body: {
    background: background,
    font: onBackground,
  },
  linkText: {
    background: {
      default: background,
      onHover: secondaryShade,
    },
    font: 'inherit',
  },
  banner: {
    background: error,
    font: onError,
    linkTextBackground: secondary,
  },
  figure: {
    border: onBackground,
  },
  header: {
    background: primary,
    font: onPrimary,
    borderBottom: onPrimary,
  },
  textCropper: {
    blockElement: secondary,
    capHeightBox: primary,
    textBox: {
      border: error,
      font: onPrimary,
    },
  },
};
