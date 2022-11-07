import { createGlobalStyle, css } from 'styled-components';

import type { BreakpointProps, ColorsList } from '../types/interface';

export const colors: ColorsList = {
  background: '#f9f9f9',
  greenHeaven: '#6baaac',
  greenDark: '#467375',
  grayDark: '#323232',
  grayMedium: '#8f8f8f',
  graylight: '#ebebec',
  white: '#FFFFFF',
  black: '#000000',
};

const fontSizes = [
  '12px',
  '14px',
  '15px',
  '16px',
  '20px',
  '24px',
  '30px',
  '36px',
  '46px',
  '56px',
  '66px',
];

const size = {
  xs: '0px',
  sm: '576px',
  md: '768px',
  lg: '1024px',
  xl: '1200px',
  xxl: '1400px',
};

const responsive = (breakpoint: string) => `@media screen and (min-width: ${breakpoint})`;

export const breakpoints: BreakpointProps = {
  xs: responsive(size.xs),
  sm: responsive(size.sm),
  md: responsive(size.md),
  lg: responsive(size.lg),
  xl: responsive(size.xl),
};

export const theme = {
  colors,
  fontSizes,
  breakpoints,
};

export const GlobalStyle = createGlobalStyle<{
  theme: { breakpoints: BreakpointProps; fontSizes: string };
}>`
  ${({ theme: { breakpoints, fontSizes } }) => css`
    * {
      margin: 0px;
      padding: 0px;
      text-decoration: none;
      letter-spacing: 0.03em;
      list-style-type: none;
      font-family: 'Source Sans Pro';
      font-style: normal;
    }

    h1,
    h2,
    h3,
    h4,
    p {
      -webkit-user-select: none;
      -webkit-touch-callout: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    h1 {
      font-size: ${fontSizes[7]};
      ${breakpoints.md} {
        font-size: ${fontSizes[8]};
      }
    }

    h2 {
      font-size: ${fontSizes[5]};
      ${breakpoints.md} {
        font-size: ${fontSizes[6]};
      }
    }

    h3 {
      font-size: ${fontSizes[4]};
      ${breakpoints.md} {
        font-size: ${fontSizes[5]};
      }
    }

    h4 {
      font-size: ${fontSizes[3]};
      ${breakpoints.md} {
        font-size: ${fontSizes[4]};
      }
    }
  `}
`;
