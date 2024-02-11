import React, { FC, useMemo, useState } from 'react';

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
  CelBotton,
  RefBottonContainer,
  ModalHome,
  CloseBotton,
} from '../components/Home';
import { Modal } from '../components/Modal';
import { ContainerPicture, Picture } from '../components/Picture';
import { SelectItems } from '../components/SelectItems';
import { Space } from '../components/Space';
import {
  BigTitle,
  MainParagraph,
  ExtraSubtitle,
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
  const [modal, setModal] = useState(false);
  const [saveEmail, setSaveEmail] = useState('');

  const dom = typeof window != 'undefined';

  const pointers = useMemo(() => {
    let count = parseInt(dom ? `${window.screen.width / 12}` : '0', 10);
    count = count > 85 ? 81 : count - 4;
    return count;
  }, [dom ?? window]);

  const newArray = pointers ? [...Array(Math.max(0, pointers))] : [];

  return (
    <>
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
                  <ExtraSubtitle>{cargo.toUpperCase()}</ExtraSubtitle>
                  <Space space="15px" />
                  <MainParagraph textAlign="justify">{resumen}</MainParagraph>
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
                  {contactInformation.map(({ link }, i) => {
                    if (link.includes('@') && !saveEmail) setSaveEmail(link);
                    return (
                      <SelectItems key={`${link}-${i}`}>
                        <SmallText color="white">{link}</SmallText>
                        <Space space="5px" />
                      </SelectItems>
                    );
                  })}
                  <Space space="10px" />
                  <CelBotton onClick={() => setModal(true)}>
                    <SmallText color="white" textAlign="justify">
                      Numero de contacto
                    </SmallText>
                  </CelBotton>
                </ContactData>
              </ContactInfoContainer>
              <CleanDiv />
            </UserInformationContainer>
            <Space space="40px" />
            <WorkExperienceContainer>
              <ExtraSubtitle color="greenDark" fontWeight="600">
                CONOCIMIENTOS
              </ExtraSubtitle>
              <Space space="12px" />
              <MainParagraph textAlign="justify">{otrosConocimientos}</MainParagraph>
              <Space space="40px" />
              <ExtraSubtitle color="greenDark" fontWeight="600">
                HABILIDADES | IDIOMAS
              </ExtraSubtitle>
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
              <Space space="40px" />
              <WorkExperienceBackground>
                <SubTitle color="greenDark">EXPERIENCIA LABORAL</SubTitle>
              </WorkExperienceBackground>
              <Space space="30px" />
              <Boxes gap="30px 0" direction="column">
                {workExperience.map(({ nombreDeLaEmpresa, cargo, descripcion }, i) => {
                  return (
                    <Box key={`${nombreDeLaEmpresa}-${i}`}>
                      <ExtraSubtitle>{cargo}</ExtraSubtitle>
                      <Space space="12px" />
                      <MainParagraph fontWeight="600">{nombreDeLaEmpresa}</MainParagraph>
                      <Space space="10px" />
                      <Paragraphs textAlign="justify">{descripcion.descripcion}</Paragraphs>
                    </Box>
                  );
                })}
              </Boxes>
              <Space space="50px" />
              <ExtraSubtitle color="greenDark" fontWeight="600">
                Referencias
              </ExtraSubtitle>
              <Space space="12px" />
              <Boxes gap="20px 0">
                {ref.map(({ nombreDeLaPersona, cargo, empresa }, i) => {
                  return (
                    <Box key={`${nombreDeLaPersona}-${i}`}>
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
                      <RefBottonContainer>
                        <strong>Celular:</strong>
                        <CelBotton color="black" width="max-content" onClick={() => setModal(true)}>
                          <SmallText color="black" textAlign="justify">
                            Numero de contacto
                          </SmallText>
                        </CelBotton>
                      </RefBottonContainer>
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
        <Modal closeModal={() => setModal(false)} modalIsOpen={modal}>
          <ModalHome>
            <CloseBotton color="white" onClick={() => setModal(false)}>
              x
            </CloseBotton>
            <MainParagraph textAlign="center" color="white" fontWeight="600">
              Para mayor informacion por favor escribeme al correo: {saveEmail}
            </MainParagraph>
          </ModalHome>
        </Modal>
      </Base>
    </>
  );
};

export default IndexPage;
