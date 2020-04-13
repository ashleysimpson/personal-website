import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const query = graphql`
  query {
    file {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default function Image() {
  const data = useStaticQuery(query);

  return (
    <div className="image">
      <Img fixed={data.file.childImageSharp.fixed} />
    </div>
  );
}
