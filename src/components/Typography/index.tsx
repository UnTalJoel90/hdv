import styled, { css } from 'styled-components';

export const ContainerInfo = styled.div`
  margin: 0 30px;
`;

interface FontProps {
  fontWeight?: string;
}

export const BigTitle = styled.h1<FontProps>`
  ${({ theme: { colors }, color, fontWeight }) => css`
    color: ${colors[`${color}`]};
    font-weight: ${fontWeight};
  `}
`;

export const Title = styled.h2<FontProps>`
  ${({ theme: { colors }, color, fontWeight }) => css`
    color: ${colors[`${color}`]};
    font-weight: ${fontWeight};
  `}
`;

export const SubTitle = styled.h3<FontProps>`
  ${({ theme: { colors }, color, fontWeight }) => css`
    color: ${colors[`${color}`]};
    font-weight: ${fontWeight};
  `}
`;

export const ExtraSubtitulo = styled.h4<FontProps>`
  ${({ theme: { colors }, color, fontWeight }) => css`
    color: ${colors[`${color}`]};
    font-weight: ${fontWeight};
  `}
`;

export const MainParagraph = styled.p<FontProps>`
  ${({ theme: { breakpoints, fontSizes, colors }, color, fontWeight }) => css`
    color: ${colors[`${color}`]};
    font-weight: ${fontWeight};
    line-height: 1.3;
    font-size: ${fontSizes[8]};
    ${breakpoints.md} {
      font-size: ${fontSizes[7]};
    }
  `}
`;

export const Paragraphs = styled.p<FontProps>`
  ${({ theme: { breakpoints, fontSizes, colors }, color, fontWeight }) => css`
    color: ${colors[`${color}`]};
    font-weight: ${fontWeight};
    line-height: 1.3;
    text-align: justify;
    font-size: ${fontSizes[9]};
    ${breakpoints.md} {
      font-size: ${fontSizes[8]};
    }
  `}
`;

export const SmallText = styled.p<FontProps>`
  ${({ theme: { breakpoints, fontSizes, colors }, color, fontWeight }) => css`
    color: ${colors[`${color}`]};
    font-weight: ${fontWeight};
    font-size: ${fontSizes[10]};
    ${breakpoints.md} {
      font-size: ${fontSizes[9]};
    }
  `}
`;
