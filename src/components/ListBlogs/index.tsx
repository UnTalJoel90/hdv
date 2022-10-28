import React, { FC } from 'react';

import { Box, Boxes } from '../Boxes';
import BlogCard, { BlogCardProps } from '../CardBlog';

interface ListBlogsProps {
  blogs: BlogCardProps[];
  goNavigation: (url: string) => void;
}

export const ListBlogs: FC<ListBlogsProps> = ({ blogs, goNavigation }) => {
  return (
    <Boxes>
      {blogs.map((b) => {
        const { id } = b;
        return (
          <Box key={id}>
            <BlogCard {...b} goNavigation={goNavigation} />
          </Box>
        );
      })}
    </Boxes>
  );
};
