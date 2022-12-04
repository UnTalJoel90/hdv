import styled, { css } from 'styled-components';

export const Markdown = styled.div`
  ${({ theme: { colors, fontSizes, breakpoints } }) => css`
    a {
      color: ${colors.greenHeaven};
      font-weight: 700;
    }
    p {
      margin-bottom: 10px;
      font-size: ${fontSizes[2]};

      ${breakpoints.md} {
        font-size: ${fontSizes[3]};
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  `}
`;
