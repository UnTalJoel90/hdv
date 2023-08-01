import { graphql, useStaticQuery } from 'gatsby';

import type { PersonalInformationProps } from '../types/interface';

export const usePersonalInformation = (): PersonalInformationProps => {
  const {
    contentfulDatosPersonales,
    allContentfulDatosDeContacto,
    allContentfulExperienciaLaboral,
    allContentfulReferencias,
  } = useStaticQuery(graphql`
    query PersonalInformation {
      contentfulDatosPersonales {
        nombre
        cargo
        habilidades
        idiomas
        resumen {
          resumen
        }
        otrosConocimientos {
          otrosConocimientos
        }
        foto {
          url
          resize(height: 200, width: 200) {
            height
            width
          }
        }
      }
      allContentfulDatosDeContacto(sort: { order: ASC, fields: ordenar }) {
        nodes {
          titulo
          link
        }
      }
      allContentfulExperienciaLaboral(sort: { order: DESC, fields: ordenar }) {
        nodes {
          nombreDeLaEmpresa
          cargo
          descripcion {
            descripcion
          }
        }
      }
      allContentfulReferencias {
        nodes {
          cargo
          empresa
          nombreDeLaPersona
        }
      }
    }
  `);

  const {
    foto,
    nombre,
    cargo,
    habilidades,
    idiomas,
    resumen: { resumen },
    otrosConocimientos: { otrosConocimientos },
  } = contentfulDatosPersonales;

  const contactInformation = allContentfulDatosDeContacto.nodes;
  const workExperience = allContentfulExperienciaLaboral.nodes;
  const ref = allContentfulReferencias.nodes;

  return {
    foto: {
      url: foto.url,
      height: foto.resize.height,
      width: foto.resize.width,
    },
    nombre,
    cargo,
    habilidades,
    idiomas,
    resumen,
    otrosConocimientos,
    contactInformation,
    workExperience,
    ref,
  };
};
