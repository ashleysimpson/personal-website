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
      <Img
        fluid={data.file.childImageSharp.fluid}
        style={{
          height: '100%',
          position: 'relative',
        }}
        imgStyle={{
          objectFit: 'contain',
          clipPath: 'circle(50%)',
          height: '65%',
          width: 'auto',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        loading={'eager'}
        alt="Website Author Image"
      />
    </div>
  );
}
