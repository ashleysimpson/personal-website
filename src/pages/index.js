import React from 'react';

import Layout from '../components/layout';
import DiagonalAccent from '../components/diagonalAccent';
import Name from '../components/name';
import AboutMe from '../components/aboutMe';
import Image from '../components/image';

export default () => {
  return (
    <Layout>
      <DiagonalAccent />
      <Name />
      <AboutMe />
      <Image />
      <div className="box reachOut"></div>
    </Layout>
  );
};
