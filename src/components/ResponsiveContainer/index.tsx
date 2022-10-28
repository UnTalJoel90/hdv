import styled, { css } from 'styled-components';

export const ResponsiveContainer = styled.div<{ withOutpadding?: boolean; bg?: boolean }>`
  ${({ withOutpadding, bg, theme: { breakpoints, colors } }) => css`
    max-width: 1024px;
    margin: auto;
    padding: ${withOutpadding ? '0' : '0 10px'};
    height: inherit;
    z-index: 10;
    background-color: ${bg ? colors.white : ''};
    box-shadow: ${bg ? `0px 0px 13px 3px ${colors.greenHeaven}61` : ''};

    ${breakpoints.md} {
      padding: ${withOutpadding ? '0' : '0 15px'};
    }

    ${breakpoints.lg} {
      padding: ${withOutpadding ? '0' : '0 5px'};
    }
  `}
`;
