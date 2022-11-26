import styled, { css } from 'styled-components';

import type { FontProps } from '../../types/interface';

export const ContainerInfo = styled.div`
  margin: 0 30px;
`;

export const BigTitle = styled.h1<FontProps>`
  ${({ theme: { colors }, color, fontWeight, textAlign = 'left' }) => css`
    color: ${colors[`${color}`]};
    text-align: ${textAlign};
    font-weight: ${fontWeight};
    line-height: 1;
  `}
`;

export const Title = styled.h2<FontProps>`
  ${({ theme: { colors }, color, fontWeight, textAlign = 'left' }) => css`
    color: ${colors[`${color}`]};
    text-align: ${textAlign};
    font-weight: ${fontWeight};
  `}
`;

export const SubTitle = styled.h3<FontProps>`
  ${({ theme: { colors }, color, fontWeight, textAlign = 'left' }) => css`
    color: ${colors[`${color}`]};
    text-align: ${textAlign};
    font-weight: ${fontWeight};
  `}
`;

export const ExtraSubtitle = styled.h4<FontProps>`
  ${({ theme: { colors }, color, fontWeight, textAlign = 'left' }) => css`
    color: ${colors[`${color}`]};
    text-align: ${textAlign};
    font-weight: ${fontWeight};
  `}
`;

export const MainParagraph = styled.p<FontProps>`
  ${({ theme: { breakpoints, fontSizes, colors }, color, fontWeight, textAlign = 'left' }) => css`
    color: ${colors[`${color}`]};
    text-align: ${textAlign};
    font-weight: ${fontWeight};
    font-size: ${fontSizes[2]};
    ${breakpoints.md} {
      font-size: ${fontSizes[3]};
    }
  `}
`;

export const Paragraphs = styled.p<FontProps>`
  ${({ theme: { breakpoints, fontSizes, colors }, color, fontWeight, textAlign = 'left' }) => css`
    color: ${colors[`${color}`]};
    text-align: ${textAlign};
    font-weight: ${fontWeight};
    font-size: ${fontSizes[1]};
    ${breakpoints.md} {
      font-size: ${fontSizes[2]};
    }
  `}
`;

export const SmallText = styled.p<FontProps>`
  ${({ theme: { breakpoints, fontSizes, colors }, color, fontWeight, textAlign = 'left' }) => css`
    color: ${colors[`${color}`]};
    text-align: ${textAlign};
    font-weight: ${fontWeight};
    font-size: ${fontSizes[0]};
    ${breakpoints.md} {
      font-size: ${fontSizes[1]};
    }
  `}
`;
