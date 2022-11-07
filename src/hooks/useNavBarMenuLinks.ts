import { graphql, useStaticQuery } from 'gatsby';

import type { NavBarMenuLinksProps } from '../types/interface';

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
