import { graphql, navigate } from 'gatsby';
import React, { FC } from 'react';

import imgHero from '../../assets/img/hero_blog.jpg';
import { type BlogCardProps } from '../../components/CardBlog';
import { HeroContainer } from '../../components/Hero';
import { ListBlogs } from '../../components/ListBlogs';
import { ResponsiveContainer } from '../../components/ResponsiveContainer';
import { Space } from '../../components/Space';
import { BigTitle } from '../../components/Typography';
import { Base } from '../../layout/base';

interface BlogsContainerProps {
  data: {
    allContentfulBlogs: {
      nodes: BlogCardProps[];
    };
  };
}

const Blogs: FC<BlogsContainerProps> = ({ data }) => {
  const blogs = data.allContentfulBlogs.nodes;

  const goNavigation = (url: string) => navigate(url);

  return (
    <Base>
      <HeroContainer color="grayMedium" url={imgHero}>
        <BigTitle color="white" fontWeight="500">
          Bienvenido(s)
        </BigTitle>
      </HeroContainer>
      <ResponsiveContainer>
        <Space space="30px" />
        <ListBlogs blogs={blogs} goNavigation={goNavigation} />
        <Space space="30px" />
      </ResponsiveContainer>
    </Base>
  );
};

export const pageQuery = graphql`
  query BlogPostsByTag($tag: String) {
    allContentfulBlogs(filter: { tags: { regex: $tag } }) {
      nodes {
        id
        titulo
        fechaDePublicacion
        tags
        pieDePagina
        imagenPrincipal {
          url
          resize(height: 300, width: 300) {
            height
            width
          }
        }
      }
    }
  }
`;

export default Blogs;
