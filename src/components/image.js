import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const query = graphql`
  query {
    file {
      childImageSharp {
        fluid(maxWidth: 600, maxHeight: 600) {
          aspectRatio
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default function Image() {
  const data = useStaticQuery(query);

  return (
    <div className="image">
      <Img fluid={data.file.childImageSharp.fluid} alt="Website Author Image" />
    </div>
  );
}
