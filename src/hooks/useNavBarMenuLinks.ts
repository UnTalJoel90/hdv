import { graphql, useStaticQuery } from 'gatsby';

export interface NavBarMenuLinksProps {
  link: string;
  name: string;
}

export const useNavBarMenuLinks = (): NavBarMenuLinksProps[] => {
  const { site } = useStaticQuery(graphql`
    query NavBar {
      site {
        siteMetadata {
          menuLinks {
            link
            name
          }
        }
      }
    }
  `);

  const navBarMenuLinks = site.siteMetadata.menuLinks;

  return navBarMenuLinks;
};
