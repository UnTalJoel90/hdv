const lodash = require('lodash');
const path = require('path');

const { kebabCase, map, flatten, uniq } = lodash;

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const blogPage = path.resolve('./src/pages/blog/index.tsx');
  const blogPost = path.resolve('./src/pages/blog/templates/index.tsx');

  const resultBlogs = await graphql(
    `
      {
        allContentfulBlogs {
          nodes {
            id
            tags
          }
        }
      }
    `,
  );

  if (resultBlogs.errors) {
    reporter.panicOnBuild('There was an error loading your Contentful posts', resultBlogs.errors);
    return;
  }

  const posts = resultBlogs.data.allContentfulBlogs.nodes;

  const tags = uniq(flatten(map(posts, (p: { tags: string[] }) => p.tags)));

  tags.forEach((tag) => {
    createPage({
      path: `/blog/${kebabCase(tag)}/`,
      component: blogPage,
      context: {
        tags: `/${tag}/`,
      },
    });
  });

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id;
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id;

      createPage({
        path: `/blogs/${post.id}/`,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      });
    });
  }
};
