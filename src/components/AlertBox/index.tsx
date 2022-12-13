import styled, { css } from 'styled-components';

export const AlertBox = styled.div<{ color?: string }>`
  ${({ theme: { colors }, color = 'warn' }) => css`
    background-color: ${colors.status[color]};
    padding: 5px;
    color: ${colors.white};
  `}
`;
