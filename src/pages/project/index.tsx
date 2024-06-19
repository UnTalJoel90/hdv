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
            <b>IMPORTANT:</b> Expo IOS does not allow QR code reading without authorization
            (EXNetwork error 403), for this reason the following code can only be used on Android
            devices.
          </MainParagraph>
        </AlertBox>
        <Space space="20px" />
        <Image src={cdigoQr.url} alt="qr" />
        <Space space="20px" />
        <SubTitle>Simulators - Examples</SubTitle>
        <Space space="10px" />
        <ContainerVideos>
          <div>
            <ExtraSubtitle>iOS</ExtraSubtitle>
            <Space space="5px" />
            <Image height="500px" width="auto" src={videoIOs.url} alt="videoIOs" />
          </div>
          <div>
            <ExtraSubtitle>Android</ExtraSubtitle>
            <Space space="5px" />
            <Image height="500px" width="auto" src={videoAndroid.url} alt="videoAndroid" />
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
