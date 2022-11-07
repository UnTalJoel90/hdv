import React, { FC, useMemo } from 'react';

import { Box, Boxes } from '../components/Boxes';
import {
  Container,
  BackgroundColor,
  UserInformationContainer,
  DescriptionContainer,
  CleanDiv,
  Description,
  ContactInfoContainer,
  ContactData,
  WorkExperienceContainer,
  WorkExperienceBackground,
  FooterFrameContainer,
  FooterFrame,
  FooterPageLine,
  SelectItems,
} from '../components/Home';
import { ContainerPicture, Picture } from '../components/Picture';
import { Space } from '../components/Space';
import {
  BigTitle,
  MainParagraph,
  ExtraSubtitulo,
  SmallText,
  SubTitle,
  Paragraphs,
} from '../components/Typography';
import { usePersonalInformation } from '../hooks';
import { Base } from '../layout/base';
import type { PersonalInformationProps } from '../types/interface';

const IndexPage: FC = () => {
  const {
    foto,
    nombre,
    cargo,
    habilidades,
    idiomas,
    resumen,
    otrosConocimientos,
    contactInformation,
    workExperience,
    ref,
  }: PersonalInformationProps = usePersonalInformation();

  const dom = typeof window != 'undefined';

  const pointers = useMemo(() => {
    let count = parseInt(dom ? `${window.screen.width / 12}` : '0', 10);
    count = count > 85 ? 81 : count - 4;
    return count;
  }, [dom ?? window]);

  const newArray = pointers ? [...Array(Math.max(0, pointers))] : [];

  return (
    <Base>
      <BackgroundColor>
        <Container withOutpadding bg>
          <UserInformationContainer>
            <DescriptionContainer>
              <CleanDiv />
              <Description>
                <BigTitle color="greenDark" fontWeight="900">
                  {nombre}
                </BigTitle>
                <Space space="20px" />
                <ExtraSubtitulo>{cargo.toUpperCase()}</ExtraSubtitulo>
                <Space space="25px" />
                <MainParagraph>{resumen}</MainParagraph>
              </Description>
            </DescriptionContainer>
            <ContactInfoContainer>
              <ContainerPicture>
                <Picture src={foto.url} width={foto.width} height={foto.height} alt={nombre} />
              </ContainerPicture>
              <Space space="24px" />
              <ContactData>
                <MainParagraph color="white">DATOS DE CONTACTO</MainParagraph>
                <Space space="17px" />
                {contactInformation.map(({ titulo, link }, i) => {
                  return (
                    <SelectItems key={`${titulo}-${link}-${i}`}>
                      <SmallText color="white">{link}</SmallText>
                      <Space space="5px" />
                    </SelectItems>
                  );
                })}
              </ContactData>
            </ContactInfoContainer>
            <CleanDiv />
          </UserInformationContainer>
          <Space space="40px" />
          <WorkExperienceContainer>
            <WorkExperienceBackground>
              <SubTitle color="greenDark">EXPERIENCIA LABORAL</SubTitle>
            </WorkExperienceBackground>
            <Space space="30px" />
            <Boxes>
              {workExperience.map(({ nombreDeLaEmpresa, cargo, descripcion }, i) => {
                return (
                  <Box key={`${nombreDeLaEmpresa}-${i}`}>
                    <ExtraSubtitulo>{cargo}</ExtraSubtitulo>
                    <Space space="12px" />
                    <MainParagraph fontWeight="600">{nombreDeLaEmpresa}</MainParagraph>
                    <Space space="10px" />
                    <Paragraphs>• {descripcion.descripcion}</Paragraphs>
                  </Box>
                );
              })}
            </Boxes>
            <Space space="40px" />
            <ExtraSubtitulo color="greenDark" fontWeight="600">
              HABILIDADES | IDIOMAS
            </ExtraSubtitulo>
            <Space space="12px" />
            <Boxes>
              <Box>
                <MainParagraph fontWeight="600">Habilidades</MainParagraph>
                <Space space="10px" />
                <ul>
                  {habilidades.map((h, i) => {
                    return (
                      <li key={`${h}-${i}`}>
                        <Paragraphs>• {h}</Paragraphs>
                      </li>
                    );
                  })}
                </ul>
              </Box>
              <Box>
                <MainParagraph fontWeight="600">Idiomas</MainParagraph>
                <Space space="17px" />
                <ul>
                  {idiomas.map((h, i) => {
                    return (
                      <li key={`${h}-${i}`}>
                        <Paragraphs>• {h}</Paragraphs>
                      </li>
                    );
                  })}
                </ul>
              </Box>
            </Boxes>
            <Space space="30px" />
            <ExtraSubtitulo color="greenDark" fontWeight="600">
              OTROS CONOCIMIENTOS
            </ExtraSubtitulo>
            <Space space="12px" />
            <MainParagraph>{otrosConocimientos}</MainParagraph>
            <Space space="40px" />
            <ExtraSubtitulo color="greenDark" fontWeight="600">
              Referencias
            </ExtraSubtitulo>
            <Space space="12px" />
            <Boxes>
              {ref.map(({ nombreDeLaPersona, telefono, cargo, empresa }, i) => {
                return (
                  <Box key={`${telefono}-${i}`}>
                    <Paragraphs>
                      <strong>Nombre de la persona:</strong> {nombreDeLaPersona}
                    </Paragraphs>
                    <Space space="10px" />
                    <Paragraphs>
                      <strong>Empresa:</strong> {empresa}
                    </Paragraphs>
                    <Space space="10px" />
                    <Paragraphs>
                      <strong>Cargo:</strong> {cargo}
                    </Paragraphs>
                    <Space space="10px" />
                    <Paragraphs>
                      <strong>Teléfono:</strong> {telefono}
                    </Paragraphs>
                    <Space space="10px" />
                  </Box>
                );
              })}
            </Boxes>
          </WorkExperienceContainer>
          <Space space="100px" />
          <FooterFrameContainer>
            {newArray.map(() => (
              <FooterFrame />
            ))}
          </FooterFrameContainer>
          <Space space="20px" />
          <FooterPageLine />
        </Container>
      </BackgroundColor>
    </Base>
  );
};

export default IndexPage;
