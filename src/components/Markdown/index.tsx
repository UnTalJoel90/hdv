import styled, { css } from 'styled-components';

import { MainParagraph } from '../Typography';

export const Markdown = styled(MainParagraph)`
  ${({ theme: { colors } }) => css`
    a {
      color: ${colors.greenHeaven};
      font-weight: 700;
    }
    p {
      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  `}
`;
