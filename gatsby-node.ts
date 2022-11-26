const lodash = require('lodash');
const path = require('path');

const { kebabCase, map, flatten, uniq } = lodash;

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const blogPage = path.resolve('./src/pages/blog/index.tsx');
  const blogPost = path.resolve('./src/pages/blog/templates/index.tsx');
  const projectPage = path.resolve('./src/pages/project/index.tsx');

  const resultBlogs = await graphql(
    `
      {
        allContentfulBlogs {
          nodes {
            id
            tags
          }
        }
        allContentfulProjects {
          nodes {
            id
          }
        }
      }
    `,
  );

  if (resultBlogs.errors) {
    reporter.panicOnBuild('There was an error loading your Contentfuls', resultBlogs.errors);
    return;
  }

  const posts = resultBlogs.data.allContentfulBlogs.nodes;
  const projects = resultBlogs.data.allContentfulProjects.nodes;
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
        path: `/blog/${post.id}/`,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      });
    });
  }

  if (projects.length > 0) {
    projects.forEach((project) => {
      console.log(`/project/${project.id}`);

      createPage({
        path: `/project/${project.id}/`,
        component: projectPage,
        context: {
          id: project.id,
        },
      });
    });
  }
};
