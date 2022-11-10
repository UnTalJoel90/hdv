import styled, { css } from 'styled-components';

export const SelectItems = styled.div`
  ${() => css`
    * {
      -webkit-user-select: auto;
      -webkit-touch-callout: auto;
      -moz-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
    }
  `}
`;
