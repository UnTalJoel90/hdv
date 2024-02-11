import styled, { css } from 'styled-components';

export const Boxes = styled.div<{ gap?: string; direction?: string }>`
  ${({ gap = '40px 0', direction = 'row' }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: ${gap};
    height: 100%;
    flex-direction: ${direction};
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
