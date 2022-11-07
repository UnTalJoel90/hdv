import styled, { css } from 'styled-components';

import type { HeroContainerProps } from '../../types/interface';

export const HeroContainer = styled.div<HeroContainerProps>`
  ${({ theme: { colors }, color, height = 200, url }) => css`
    height: ${height}px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(to right, ${colors[`${color}`]}c2, ${colors.black}c2),
      url(${url});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `}
`;
