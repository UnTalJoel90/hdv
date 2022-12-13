import { graphql } from 'gatsby';
import React, { FC } from 'react';

import { AlertBox } from '../../components/AlertBox';
import { Markdown } from '../../components/Markdown';
import { Image, ContainerVideos } from '../../components/Picture';
import { ResponsiveContainer } from '../../components/ResponsiveContainer';
import { Space } from '../../components/Space';
import { ExtraSubtitle, MainParagraph, SubTitle, Title } from '../../components/Typography';
import { Base } from '../../layout/base';
import { ProjectTemplatesProps } from '../../types/interface';

const ProjectTemplates: FC<ProjectTemplatesProps> = ({ data }) => {
  const { contentfulProjects } = data;
  const { title, description, cdigoQr, videoIOs, videoAndroid } = contentfulProjects;

  const descriptionHtml = description.childMarkdownRemark.html.replace(
    /<a/gi,
    '<a target="_blank"',
  );

  return (
    <Base>
      <ResponsiveContainer>
        <Space space="30px" />
        <Title>{title}</Title>
        <Space space="20px" />
        <Markdown dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
        <Space space="20px" />
        <SubTitle>QR</SubTitle>
        <Space space="10px" />
        <AlertBox>
          <MainParagraph>
            <b>IMPORTANTE:</b> Expo IOS no permite la lectura de QRS sin autorizacion (EXNetwork
            error 403), por este motivo el siguiente codigo solo puede ser usado en dispositivos
            Android.
          </MainParagraph>
        </AlertBox>
        <Space space="20px" />
        <Image src={cdigoQr.url} alt="qr" />
        <Space space="20px" />
        <SubTitle>Simuladores - Gifs de Ejemplo</SubTitle>
        <Space space="10px" />
        <ContainerVideos>
          <div>
            <ExtraSubtitle>IOs</ExtraSubtitle>
            <Space space="5px" />
            <Image height="500px" src={videoIOs.url} alt="videoIOs" />
          </div>
          <div>
            <ExtraSubtitle>Android</ExtraSubtitle>
            <Space space="5px" />
            <Image height="500px" src={videoAndroid.url} alt="videoAndroid" />
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
        childMarkdownRemark {
          html
        }
      }
      cdigoQr {
        url
      }
    }
  }
`;

export default ProjectTemplates;
