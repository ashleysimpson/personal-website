import React from 'react';

import Layout from '../components/layout';
import DiagonalAccent from '../components/diagonalAccent';
import Name from '../components/name';
import AboutMe from '../components/aboutMe';

export default () => {
  return (
    <Layout>
      <DiagonalAccent />
      <Name />
      <AboutMe />
      <div className="box image"></div>
      <div className="box reachOut"></div>
    </Layout>
  );
};
