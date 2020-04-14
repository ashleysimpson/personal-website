import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const query = graphql`
  query {
    file {
      childImageSharp {
        fixed(width: 425, height: 425) {
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
      <Img fixed={data.file.childImageSharp.fixed} alt="Website Author Image" />
    </div>
  );
}
