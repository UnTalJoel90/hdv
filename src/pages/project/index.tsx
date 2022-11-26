import { graphql } from 'gatsby';
import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import { Image } from '../../components/Picture';
import { ResponsiveContainer } from '../../components/ResponsiveContainer';
import { Space } from '../../components/Space';
import { ExtraSubtitle, MainParagraph, SubTitle, Title } from '../../components/Typography';
import { Base } from '../../layout/base';
import { ProjectTemplatesProps } from '../../types/interface';

const ContainerVideos = styled.div`
  ${({ theme: { breakpoints } }) => css`
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
    ${breakpoints.md} {
      flex-wrap: nowrap;
    }
  `}
`;

const ProjectTemplates: FC<ProjectTemplatesProps> = ({ data }) => {
  const { contentfulProjects } = data;
  const { title, description, cdigoQr, videoIOs, videoAndroid } = contentfulProjects;

  return (
    <Base>
      <ResponsiveContainer>
        <Space space="30px" />
        <Title>{title}</Title>
        <Space space="20px" />
        <MainParagraph>{description.description}</MainParagraph>
        <Space space="20px" />
        <SubTitle>QR</SubTitle>
        <Space space="10px" />
        <Image src={cdigoQr.url} alt="qr" />
        <Space space="20px" />
        <SubTitle>Videos de ejemplo</SubTitle>
        <Space space="10px" />
        <ContainerVideos>
          <div>
            <ExtraSubtitle>IOs</ExtraSubtitle>
            <Space space="5px" />
            <Image src={videoIOs.url} alt="videoIOs" />
          </div>
          <div>
            <ExtraSubtitle>Android</ExtraSubtitle>
            <Space space="5px" />
            <Image src={videoAndroid.url} alt="videoAndroid" />
          </div>
        </ContainerVideos>
        <Space space="50px" />
      </ResponsiveContainer>
    </Base>
  );
};

export const pageQuery = graphql`
  query ProjectsById($id: String) {
    contentfulProjects(id: { eq: $id }) {
      title
      videoAndroid {
        url
      }
      videoIOs {
        url
      }
      description {
        description
      }
      cdigoQr {
        url
      }
    }
  }
`;

export default ProjectTemplates;
