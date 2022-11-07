import styled, { css } from 'styled-components';

import type { SpaceProps } from '../../types/interface';

export const Space = styled.div<SpaceProps>`
  ${({ space }) => css`
    height: ${space};
  `}
`;
