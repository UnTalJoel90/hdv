import React, { FC, memo } from 'react';
import styled, { css } from 'styled-components';

import { ResponsiveContainer } from '../ResponsiveContainer';
import { SmallText } from '../Typography';

const BackgroundColor = styled.div`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.grayDark};
  `}
`;

const Container = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 100%;
    margin: auto;
  `}
`;

const CopyContainer = styled(SmallText)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Copy = styled.div`
  margin-right: 5px;
  font-size: 9px;
`;

const Footer: FC = memo(() => {
  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();

  return (
    <BackgroundColor>
      <ResponsiveContainer>
        <Container>
          <CopyContainer color="white" fontWeight="900">
            <Copy>&#x24B8;</Copy> {`${day}/${month}/${year}`} Todos los derechos reservados.
          </CopyContainer>
        </Container>
      </ResponsiveContainer>
    </BackgroundColor>
  );
});

export default Footer;
