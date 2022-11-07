import styled, { css } from 'styled-components';

import type { LineProps } from '../../types/interface';

export const Line = styled.hr<LineProps>`
  ${({ theme: { colors }, color, size = '4' }) => css`
    border-color: ${colors[`${color}`]};
    border-bottom-width: ${size}px;
  `}
`;
