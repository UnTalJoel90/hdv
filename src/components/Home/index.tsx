import styled, { css } from 'styled-components';

import { ResponsiveContainer } from '../ResponsiveContainer';
import { Paragraphs } from '../Typography';

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
      padding-right: 10px;
      padding-left: 10px;
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

export const FooterFrameContainer = styled.div`
  ${() => css`
    display: flex;
    flex-direction: row;
  `}
`;

export const FooterFrame = styled.div`
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

export const CelBotton = styled.div<{ width?: string }>`
  ${({ theme: { colors }, color = 'white', width = 'auto' }) => css`
    border-radius: 20px;
    border-width: 1px;
    border-style: solid;
    border-color: ${colors[color]};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 4px 8px;
    cursor: pointer;
    width: ${width};
  `}
`;

export const CloseBotton = styled.div<{ size?: string }>`
  ${({ theme: { colors }, color = 'white', size = '20px' }) => css`
    border-radius: 20px;
    border-width: 1px;
    border-style: solid;
    border-color: ${colors[color]};
    cursor: pointer;
    color: ${colors[color]};
    padding: 0 6px 2px;
    font-size: 13px;
    position: absolute;
    top: 10px;
    right: 10px;
  `}
`;

export const RefBottonContainer = styled(Paragraphs)`
  ${() => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    strong {
      margin-right: 5px;
    }
  `}
`;

export const ModalHome = styled.div`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.greenHeaven};
    width: 300px;
    padding: 30px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;
  `}
`;
