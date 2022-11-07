import styled, { css } from 'styled-components';

export const ContainerPicture = styled.div`
  ${({ theme: { breakpoints } }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;

    ${breakpoints.md} {
      margin-right: 0;
    }
  `}
`;

export const Picture = styled.img`
  ${({ theme: { colors } }) => css`
    border-radius: 50%;
    border: 3px solid ${colors.white};
    max-width: 200px;
    width: 100%;
    height: auto;
  `}
`;
