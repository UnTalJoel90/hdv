import React, { Fragment, FC, memo, useState, useEffect, createRef } from 'react';
import styled, { css } from 'styled-components';

// import menuClose from '../../assets/img/menu-close.png';
// import menuOpen from '../../assets/img/menu-open.png';
import { useProjects } from '../../hooks/useProjects';
import type { /*MenuMobileProps,*/ NavBarDesktopProps, NavBarProps } from '../../types/interface';
import { Line } from '../Line';
import { ResponsiveContainer } from '../ResponsiveContainer';
// import { Space } from '../Space';
import { ExtraSubtitle, /*MainParagraph,*/ SubTitle /*Title*/ } from '../Typography';

const BackgroundColor = styled.div`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.background};
    border-bottom-style: solid;
    border-bottom-width: 3px;
    border-color: ${colors.grayMedium};
    box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.1);
    height: 60px;
    position: sticky;
    top: 0;
    z-index: 200;
  `}
`;

const Items = styled.div`
  ${({ theme: { breakpoints } }) => css`
    /* display: none;
    z-index: -1; */
    /* ${breakpoints.md} { */
    z-index: 1;
    display: flex;
    flex-direction: row;
    height: 100%;
    position: relative;
    /* } */
  `}
`;

const Item = styled.button<{ extraMargin: number }>`
  ${({ theme: { breakpoints }, extraMargin }) => css`
    background-color: inherit;
    border: none;
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    margin: auto 10px auto 0; // Eliminar cuando se active el menu mobile
    margin-left: ${extraMargin}px;

    ${breakpoints.md} {
      /* display: block; */
      cursor: pointer;
      /* margin: auto 20px auto 0; */
    }
  `}
`;

const ExtraMenuBox = styled.div`
  ${({ theme: { colors } }) => css`
    position: absolute;
    padding: 10px;
    top: 30px;
    width: 100%;
    min-width: 150px;
    background: ${colors.white};
    border: 1.5px solid ${colors.greenHeaven};
    border-radius: 5px;
  `}
`;

const DividerMenu = styled.div`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.grayDark};
    height: 50%;
    width: 2px;
    margin: auto 0;
  `}
`;

// const ItemsMobile = styled.div`
//   ${({ theme: { breakpoints } }) => css`
//     display: flex;
//     flex-direction: row;
//     height: 100%;
//     justify-content: space-between;
//     align-items: center;

//     ${breakpoints.md} {
//       display: none;
//       z-index: -1;
//     }
//   `}
// `;

// const IconMenu = styled.img`
//   ${({ theme: { colors } }) => css`
//     border: 2px solid ${colors.grayMedium};
//     border-radius: 10px;
//     padding: 10px;
//     height: 20px;
//     width: 20px;
//   `}
// `;

// const MenuMobileContainer = styled.div`
//   ${({ theme: { colors, breakpoints } }) => css`
//     position: absolute;
//     top: 0;
//     right: 0;
//     left: 0;
//     bottom: 0;
//     width: 100vw;
//     height: 100vh;
//     z-index: 10;
//     background-color: ${colors.white};

//     ${breakpoints.md} {
//       display: none;
//       z-index: -1;
//     }
//   `}
// `;

// const ItemsContainerMobile = styled.div`
//   ${() => css`
//     display: flex;
//     flex-direction: column;
//     justify-items: center;
//     padding: 10px;
//     align-items: center;
//   `}
// `;

// const OpenMenuContainer = styled(ItemsMobile)`
//   padding: 0 10px;
// `;

const MenuDesktop: FC<NavBarDesktopProps> = ({ menuList, goNavigation, checkExtraMenu }) => {
  const [openMenu, setOpenMenu] = useState(-1);
  const ref = createRef<HTMLDivElement>();

  useEffect(() => {
    const checkIfClickedOutside = (e: { target: any }) => {
      if (openMenu && ref.current && !ref.current.contains(e.target)) {
        setOpenMenu(-1);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [openMenu]);

  return (
    <Items>
      {menuList.map(({ name, link, extraMenu }, i) => {
        const array: any[] = checkExtraMenu(link);
        return (
          <Fragment key={`${name}-${i}`}>
            <Item
              extraMargin={i === 0 ? 0 : 10}
              onClick={() => {
                if (link && !extraMenu) goNavigation(link);
                else if (extraMenu && array.length === 1) {
                  goNavigation(`${link}/${array[0].id}`);
                } else setOpenMenu(i);
              }}>
              <ExtraSubtitle>
                {name}
                {array.length === 1 ? `: ${array[0].title}` : ''}
              </ExtraSubtitle>
              {array.length > 1 && openMenu === i && extraMenu ? (
                <ExtraMenuBox ref={ref}>
                  {array.map((p) => {
                    const { title, id } = p;
                    return (
                      <SubTitle onClick={() => goNavigation(`${link}/${id}`)} fontWeight="600">
                        - {title}
                      </SubTitle>
                    );
                  })}
                </ExtraMenuBox>
              ) : null}
            </Item>
            {i + 1 !== menuList.length && <DividerMenu />}
          </Fragment>
        );
      })}
    </Items>
  );
};

// const MenuMobile: FC<MenuMobileProps> = ({
//   menuList,
//   goNavigation,
//   isOpenMenu,
//   setIsOpenMenu,
//   checkExtraMenu,
// }) => {
//   return (
//     <MenuMobileContainer>
//       <BackgroundColor>
//         <OpenMenuContainer>
//           <div />
//           <IconMenu
//             onClick={() => setIsOpenMenu(!isOpenMenu)}
//             src={isOpenMenu ? menuClose : menuOpen}
//           />
//         </OpenMenuContainer>
//         <Line color="greenHeaven" size="1" />
//       </BackgroundColor>
//       <ItemsContainerMobile>
//         <Space space="15px" />
//         {menuList.map(({ name, link, extraMenu }) => {
//           const array: any[] = checkExtraMenu(link);
//           return (
//             <>
//               <Item>
//                 <Title onClick={() => (extraMenu ? null : goNavigation(link))}>{name}</Title>
//                 {array.map((p) => {
//                   const { title, id } = p;
//                   return (
//                     <>
//                       <Space space="5px" />
//                       <MainParagraph onClick={() => goNavigation(`${link}/${id}`)} fontWeight="600">
//                         {title}
//                       </MainParagraph>
//                     </>
//                   );
//                 })}
//               </Item>
//               <Space space="10px" />
//             </>
//           );
//         })}
//       </ItemsContainerMobile>
//     </MenuMobileContainer>
//   );
// };

const NaBar: FC<NavBarProps> = memo(({ menuList, goNavigation }) => {
  // const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { projects } = useProjects();

  const checkExtraMenu = (link: string): any[] => {
    switch (link) {
      case '/project':
        return projects;
      default:
        return [];
    }
  };

  return (
    <>
      <BackgroundColor>
        <ResponsiveContainer>
          <MenuDesktop
            menuList={menuList}
            goNavigation={goNavigation}
            checkExtraMenu={checkExtraMenu}
          />
          {/* <ItemsMobile>
            <div />
            <IconMenu
              onClick={() => setIsOpenMenu(!isOpenMenu)}
              src={isOpenMenu ? menuClose : menuOpen}
            />
          </ItemsMobile> */}
        </ResponsiveContainer>
        <Line color="greenHeaven" size="1" />
        {/* {isOpenMenu ? (
          <MenuMobile
            menuList={menuList}
            goNavigation={goNavigation}
            isOpenMenu={isOpenMenu}
            setIsOpenMenu={setIsOpenMenu}
            checkExtraMenu={checkExtraMenu}
          />
        ) : null} */}
      </BackgroundColor>
    </>
  );
});

export default NaBar;
