import React, { FC, memo } from 'react';
import styled, { css } from 'styled-components';

import type { BlogCardProps, HeadCardProps } from '../../types/interface';
import { Space } from '../Space';
import { MainParagraph, SmallText, Title } from '../Typography';

const Container = styled.button`
  ${() => css`
    background-color: inherit;
    border: none;
    cursor: pointer;
    text-align: left;
  `}
`;

const HeadCard = styled.div<HeadCardProps>`
  ${({ height }) => css`
    position: relative;
    height: ${height}px;
  `}
`;

const BackgroundImg = styled.div`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.black}c7;
    position: absolute;
    width: 100%;
    height: 100%;
  `}
`;

const TitleCard = styled(Title)`
  position: absolute;
  width: 90%;
  left: 20px;
  top: 20px;
`;

const SmallTextDate = styled(SmallText)`
  ${({ theme: { colors } }) => css`
    color: ${colors.graylight};
    position: absolute;
    bottom: 20px;
    right: 20px;
  `}
`;

const Img = styled.img`
  ${() => css`
    width: 100%;
    height: 100%;
  `}
`;

const BodyCard = styled.div`
  ${() => css``}
`;

const TagsCard = styled.div`
  display: flex;
`;

const Tag = styled(SmallText)`
  ${({ theme: { colors } }) => css`
    color: ${colors.graylight};
    background-color: ${colors.grayDark};
    width: max-content;
    padding: 5px 8px;
    border-radius: 100px;
    margin-right: 5px;
  `}
`;

const ParagraphCard = styled(MainParagraph)`
  ${({ theme: { breakpoints } }) => css`
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;

    ${breakpoints.md} {
      display: block;
    }
  `}
`;

const BlogCard: FC<BlogCardProps> = memo(
  ({
    id,
    titulo,
    fechaDePublicacion,
    tags,
    pieDePagina,
    imagenPrincipal: {
      url,
      resize: { height },
    },
    goNavigation,
  }) => {
    const date = new Date(fechaDePublicacion).toLocaleDateString();

    return (
      <Container onClick={() => goNavigation(`/blogs/${id}`)}>
        <HeadCard height={height}>
          <BackgroundImg />
          <TitleCard color="graylight">{titulo}</TitleCard>
          <SmallTextDate>{date}</SmallTextDate>
          <Img src={url} alt={titulo} />
        </HeadCard>
        <Space space="10px" />
        <BodyCard>
          <TagsCard>
            {tags.map((t) => {
              return <Tag key={t}>{t}</Tag>;
            })}
          </TagsCard>
          <Space space="10px" />
          <ParagraphCard>{pieDePagina}</ParagraphCard>
        </BodyCard>
      </Container>
    );
  },
);

export default BlogCard;
