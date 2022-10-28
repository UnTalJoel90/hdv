import { graphql, navigate } from 'gatsby';
import React, { FC } from 'react';

import type { BlogCardProps } from '../../../components/CardBlog';
import { ListBlogs } from '../../../components/ListBlogs';
import { ResponsiveContainer } from '../../../components/ResponsiveContainer';
import { Space } from '../../../components/Space';
import { Base } from '../../../layout/base';

interface ContentfulBlogTemplatesProps extends BlogCardProps {}

interface BlogTemplatesProps {
  data: {
    contentfulBlogs: ContentfulBlogTemplatesProps;
    next: BlogCardProps;
    previous: BlogCardProps;
  };
}

const BlogTemplates: FC<BlogTemplatesProps> = ({ data }) => {
  const { contentfulBlogs, next, previous } = data;
  const { titulo } = contentfulBlogs;

  const goNavigation = (url: string) => navigate(url);

  const otherBlogs: BlogCardProps[] = [];
  if (previous) otherBlogs.push(previous);
  if (next) otherBlogs.push(next);

  return (
    <Base>
      <ResponsiveContainer>
        <div>{titulo}</div>
        <Space space="30px" />
        <ListBlogs blogs={otherBlogs} goNavigation={goNavigation} />
        <Space space="30px" />
      </ResponsiveContainer>
    </Base>
  );
};

export const pageQuery = graphql`
  query BlogPostById($id: String, $previousPostId: String, $nextPostId: String) {
    contentfulBlogs(id: { eq: $id }) {
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
    previous: contentfulBlogs(id: { eq: $previousPostId }) {
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
    next: contentfulBlogs(id: { eq: $nextPostId }) {
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
`;

export default BlogTemplates;
