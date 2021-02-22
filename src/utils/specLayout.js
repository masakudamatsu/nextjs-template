// This file provides the single source of truth on design.
// CSS declarations will be derived from the values set in this file.

import {font} from './specFont';

export const marginLeft = 10;
export const minScreenWidth = 320;

// Component layout parameters

export const textCropper = {
  left: '25vw',
  top: '25vh',
  width: '50vw',
  blockElement: {
    height: font.textCropper.capHeight,
  },
  capHeightBox: {
    height: font.textCropper.capHeight,
  },
};

export const h1 = {
  height: font.h1.capHeight,
  whitespace: {
    aboveH1: font.h1.capHeight,
    belowH1: font.h1.capHeight,
  },
};

export const header = {
  borderBottomWidth: 1,
  h1: {
    height: font.h1.capHeight,
  },
  logo: {
    height: 30,
    width: 30,
  },
  speed: {
    hide: '.5s',
    show: '.25s',
  },
  whitespace: {
    aboveH1: 15,
    belowH1: 15,
    betweenLogoAndH1: marginLeft,
  },
  // get height() {
  //   return (
  //     this.capheight.h1 + this.whitespace.aboveH1 + this.whitespace.belowH1
  //   ); // excludes the border width which will not scale up beyond 728px wide screens
  // },
};

// to be used in mediaQuery.js

export const twoColumns = {
  minWidth: minScreenWidth * 2 - marginLeft,
};

export const threeColumns = {
  minWidth: minScreenWidth * 3 - marginLeft * 2,
};
