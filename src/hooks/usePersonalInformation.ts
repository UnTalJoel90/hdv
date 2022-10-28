import { graphql, useStaticQuery } from 'gatsby';

interface ContactInformationProps {
  titulo: string;
  link: string;
}

interface PictureProps {
  url: string;
  height: number;
  width: number;
}

interface WorkExperienceProps {
  nombreDeLaEmpresa: string;
  cargo: string;
  descripcion: {
    descripcion: string;
  };
}

export interface PersonalInformationProps {
  foto: PictureProps;
  nombre: string;
  cargo: string;
  habilidades: string[];
  idiomas: string[];
  resumen: string;
  otrosConocimientos: string;
  contactInformation: ContactInformationProps[];
  workExperience: WorkExperienceProps[];
}

export const usePersonalInformation = (): PersonalInformationProps => {
  const {
    contentfulDatosPersonales,
    allContentfulDatosDeContacto,
    allContentfulExperienciaLaboral,
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
      allContentfulExperienciaLaboral(sort: { order: ASC, fields: ordenar }) {
        nodes {
          nombreDeLaEmpresa
          cargo
          descripcion {
            descripcion
          }
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
  };
};
