import React, { FC, memo } from 'react';

import type { ListBlogsProps } from '../../types/interface';
import { Box, Boxes } from '../Boxes';
import BlogCard from '../CardBlog';

export const ListBlogs: FC<ListBlogsProps> = memo(({ blogs, goNavigation }) => {
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
});
