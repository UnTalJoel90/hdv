import React, { FC, memo } from 'react';
import styled, { css } from 'styled-components';

import { ResponsiveContainer } from '../ResponsiveContainer';
import { Paragraphs } from '../Typography';

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

const Footer: FC = memo(() => {
  const now = new Date().toLocaleDateString();

  return (
    <BackgroundColor>
      <ResponsiveContainer>
        <Container>
          <Paragraphs color="white" fontWeight="900">
            Copyright &#x24B8; {now}. All Rigths Reserved
          </Paragraphs>
        </Container>
      </ResponsiveContainer>
    </BackgroundColor>
  );
});

export default Footer;
