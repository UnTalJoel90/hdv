import { type ReactNode } from 'react';

export interface HeadCardProps {
  height: number;
}

export interface ExtraProps {
  goNavigation: (url: string) => void;
}

export interface BlogCardProps extends ExtraProps {
  id: string;
  titulo: string;
  fechaDePublicacion: string;
  tags: string[];
  pieDePagina: string;
  imagenPrincipal: {
    url: string;
    resize: {
      height: number;
      width: number;
    };
  };
}

export interface HeroContainerProps {
  height?: number;
  url?: string;
}

export interface LineProps {
  size?: string;
}

export interface ListBlogsProps {
  blogs: BlogCardProps[];
  goNavigation: (url: string) => void;
}

export interface NavBarMenuLinksProps {
  link: string;
  name: string;
  extraMenu?: boolean;
}

export interface NavBarProps {
  menuList: NavBarMenuLinksProps[];
  goNavigation: (url: string) => void;
}

export interface NavBarDesktopProps extends NavBarProps {
  checkExtraMenu: (link: string) => any[];
}

export interface MenuMobileProps extends NavBarProps, NavBarDesktopProps {
  isOpenMenu: boolean;
  setIsOpenMenu: (isOpenMenu: boolean) => void;
}

export interface SpaceProps {
  space: string;
}

export interface FontProps {
  fontWeight?: string;
  textAlign?: string;
}

export interface BaseProps {
  children: ReactNode | ReactNode[];
}

export interface BlogsContainerProps {
  data: {
    allContentfulBlogs: {
      nodes: BlogCardProps[];
    };
  };
}

export interface ContentfulBlogTemplatesProps extends BlogCardProps {}

export interface BlogTemplatesProps {
  data: {
    contentfulBlogs: ContentfulBlogTemplatesProps;
    next: BlogCardProps;
    previous: BlogCardProps;
  };
}

export interface ColorsList {
  [key: string]: string;
}

export interface BreakpointProps {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface ContactInformationProps {
  titulo: string;
  link: string;
}

export interface PictureProps {
  url: string;
  height: number;
  width: number;
}

export interface WorkExperienceProps {
  nombreDeLaEmpresa: string;
  cargo: string;
  descripcion: {
    descripcion: string;
  };
}

export interface RefProps {
  cargo: string;
  empresa: string;
  nombreDeLaPersona: string;
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
  ref: RefProps[];
}

export interface UseProjectsProps {
  projects: {
    id: string;
    title: string;
  }[];
}

export interface ProjectTemplatesProps {
  data: {
    contentfulProjects: {
      title: string;
      videoAndroid: {
        url: string;
      };
      videoIOs: {
        url: string;
      };
      description: {
        description: string;
      };
      cdigoQr: {
        url: string;
      };
    };
  };
}

export interface ModalProps {
  closeModal: () => void;
  modalIsOpen: boolean;
  children?: ReactNode;
}
