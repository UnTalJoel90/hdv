import { createGlobalStyle, css } from 'styled-components';

interface ColorsList {
  [key: string]: string;
}

interface BreakpointProps {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

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
  '66px',
  '56px',
  '46px',
  '36px',
  '30px',
  '24px',
  '20px',
  '16px',
  '14px',
  '13px',
  '12px',
  '11px',
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
  *  {
    margin: 0px;
    padding: 0px;
    text-decoration: none;
    letter-spacing: 0.03em;
    list-style-type: none;
  }

  ${({ theme: { breakpoints, fontSizes } }) => css`
    h1 {
      line-height: 1;
      font-size: ${fontSizes[3]};
      ${breakpoints.md} {
        font-size: ${fontSizes[2]};
      }
    }
    h2 {
      font-size: ${fontSizes[5]};
      ${breakpoints.md} {
        font-size: ${fontSizes[4]};
      }
    }
    h3 {
      font-size: ${fontSizes[6]};
      ${breakpoints.md} {
        font-size: ${fontSizes[5]};
      }
    }
    h4 {
      font-size: ${fontSizes[7]};
      ${breakpoints.md} {
        font-size: ${fontSizes[6]};
      }
    }
  `}
`;
