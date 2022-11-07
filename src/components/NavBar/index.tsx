import React, { Fragment, FC, memo } from 'react';
import styled, { css } from 'styled-components';

import type { NavBarProps } from '../../types/interface';
import { Line } from '../Line';
import { ResponsiveContainer } from '../ResponsiveContainer';
import { ExtraSubtitulo } from '../Typography';

const BackgroundColor = styled.div`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.background};
    border-bottom-style: solid;
    border-bottom-width: 3px;
    border-color: ${colors.grayMedium};
    box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.1);
    height: 60px;
    position: sticky;
    top: 0;
    z-index: 200;
  `}
`;

const Items = styled.div`
  ${() => css`
    display: flex;
    flex-direction: row;
    height: 100%;
  `}
`;

const Item = styled.button`
  ${() => css`
    background-color: inherit;
    border: none;
    margin: auto 20px auto 0;
    cursor: pointer;
  `}
`;

const NaBar: FC<NavBarProps> = memo(({ menuList, goNavigation }) => {
  return (
    <BackgroundColor>
      <ResponsiveContainer>
        <Items>
          {menuList.map(({ name, link }, i) => {
            return (
              <Fragment key={`${name}-${i}`}>
                <Item onClick={() => goNavigation(link)}>
                  <ExtraSubtitulo>{name}</ExtraSubtitulo>
                </Item>
              </Fragment>
            );
          })}
        </Items>
      </ResponsiveContainer>
      <Line color="greenHeaven" size="1" />
    </BackgroundColor>
  );
});

export default NaBar;
