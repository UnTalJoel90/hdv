import styled, { css } from 'styled-components';

export const ContainerPicture = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`;

export const Picture = styled.img`
  ${({ theme: { colors } }) => css`
    border-radius: 50%;
    border: 3px solid ${colors.white};
  `}
`;
