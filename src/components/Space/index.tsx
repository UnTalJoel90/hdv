import styled, { css } from 'styled-components';

interface SpaceProps {
  space: string;
}

export const Space = styled.div<SpaceProps>`
  ${({ space }) => css`
    height: ${space};
  `}
`;
