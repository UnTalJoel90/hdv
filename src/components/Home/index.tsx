import styled, { css } from 'styled-components';

import { ResponsiveContainer } from '../ResponsiveContainer';

export const Container = styled(ResponsiveContainer)`
  ${({ theme: { breakpoints } }) => css`
    max-width: 375px;

    ${breakpoints.md} {
      max-width: 1024px;
    }
  `}
`;

export const BackgroundColor = styled.div`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.grayDark};
  `}
`;

export const UserInformationContainer = styled.div`
  ${({ theme: { breakpoints } }) => css`
    ${breakpoints.md} {
      position: relative;
      display: flex;
      justify-content: flex-end;
    }
  `}
`;

export const ContactInfoContainer = styled.div`
  ${({ theme: { breakpoints, colors } }) => css`
    background-color: ${colors.greenHeaven};
    padding: 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    ${breakpoints.md} {
      flex-direction: column;
      padding: 30px;
      max-width: 300px;
      width: 100%;
      height: 420px;
      margin: 0 50px;
      z-index: 2;
      padding: 0;
    }
  `}
`;

export const ContactData = styled.div`
  ${({ theme: { breakpoints } }) => css`
    width: 100%;

    ${breakpoints.md} {
      width: auto;
    }
  `}
`;

export const DescriptionContainer = styled.div`
  ${({ theme: { breakpoints, colors } }) => css`
    background-color: ${colors.graylight};
    padding: 15px;

    ${breakpoints.md} {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 350px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      padding: 0;
    }
  `}
`;

export const CleanDiv = styled.div`
  ${({ theme: { breakpoints } }) => css`
    ${breakpoints.md} {
      width: 50%;
    }
  `}
`;

export const Description = styled.div`
  ${({ theme: { breakpoints } }) => css`
    ${breakpoints.md} {
      width: 377px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  `}
`;

export const WorkExperienceContainer = styled.div`
  ${({ theme: { breakpoints } }) => css`
    padding: 0 15px;
    ${breakpoints.md} {
      width: 710px;
      margin: auto;
      padding: 0;
    }
  `}
`;

export const WorkExperienceBackground = styled.div`
  ${({ theme: { breakpoints, colors } }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${colors.graylight};
    height: 43px;
    border-bottom: 2px solid ${colors.greenDark};
    padding-left: 5px;
    ${breakpoints.md} {
      width: 425px;
    }
  `}
`;

export const FooterframeContainer = styled.div`
  ${() => css`
    display: flex;
    flex-direction: row;
  `}
`;

export const Footerframe = styled.div`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.greenDark};
    height: 3px;
    width: 3px;
    margin-right: 3px;
  `}
`;

export const FooterPageLine = styled.div`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.greenHeaven};
    display: flex;
    flex-direction: column;
    margin-left: auto;
    height: 20px;
    width: 60%;
  `}
`;
