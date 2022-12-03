import { navigate } from 'gatsby';
import React, { FC, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import Footer from '../components/Footer';
import NaBar from '../components/NavBar';
import { useNavBarMenuLinks } from '../hooks/useNavBarMenuLinks';
import { GlobalStyle, theme } from '../theme';
import type { BaseProps, NavBarMenuLinksProps } from '../types/interface';

export const Base: FC<BaseProps> = ({ children }) => {
  const menuList: NavBarMenuLinksProps[] = useNavBarMenuLinks();
  const goNavigation = (url: string) => navigate(url);

  const disabledRightClick = (e: any) => {
    e.preventDefault();
  };

  const dom = typeof window != 'undefined';

  useEffect(() => {
    if (dom) {
      window.addEventListener('contextmenu', disabledRightClick);
      return () => {
        window.removeEventListener('contextmenu', disabledRightClick);
      };
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NaBar menuList={menuList} goNavigation={goNavigation} />
      {children}
      <Footer />
    </ThemeProvider>
  );
};
