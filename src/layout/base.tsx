// import { navigate } from 'gatsby';
import React, { FC, ReactNode, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import Footer from '../components/Footer';
// import NaBar from '../components/NavBar';
// import { NavBarMenuLinksProps, useNavBarMenuLinks } from '../hooks/useNavBarMenuLinks';
import { GlobalStyle, theme } from '../theme';

export interface Props {
  children: ReactNode | ReactNode[];
}

export const Base: FC<Props> = ({ children }) => {
  // const menuList: NavBarMenuLinksProps[] = useNavBarMenuLinks();
  // const goNavigation = (url: string) => navigate(url);

  const disabledRightClick = (e: any) => {
    e.preventDefault();
  };

  useEffect(() => {
    window.addEventListener('mousemove', () => {
      // eslint-disable-next-line no-debugger
      debugger;
    });
    window.addEventListener('contextmenu', disabledRightClick);

    return () => {
      window.removeEventListener('contextmenu', disabledRightClick);
      window.removeEventListener('mousemove', () => {
        // eslint-disable-next-line no-debugger
        debugger;
      });
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <NaBar menuList={menuList} goNavigation={goNavigation} /> */}
      {children}
      <Footer />
    </ThemeProvider>
  );
};
