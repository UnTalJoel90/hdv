import { graphql, useStaticQuery } from 'gatsby';

import type { UseProjectsProps } from '../types/interface';

export const useProjects = (): UseProjectsProps => {
  const { allContentfulProjects } = useStaticQuery(graphql`
    query Projects {
      allContentfulProjects {
        nodes {
          id
          title
        }
      }
    }
  `);

  const projects = allContentfulProjects.nodes;

  return {
    projects,
  };
};
