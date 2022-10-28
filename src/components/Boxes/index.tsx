import styled, { css } from 'styled-components';

export const Boxes = styled.div`
  ${() => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 40px 0;
    height: 100%;
  `}
`;

export const Box = styled.div`
  ${({ theme: { breakpoints } }) => css`
    flex: 0 100%;

    ${breakpoints.md} {
      flex: 0 48%;
    }
  `}
`;
