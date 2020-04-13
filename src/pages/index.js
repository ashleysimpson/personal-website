import React from 'react';

import Layout from '../components/layout';
import DiagonalAccent from '../components/diagonalAccent';
import Name from '../components/name';

export default () => {
  return (
    <Layout>
      <DiagonalAccent />
      <Name />
      <div className="box aboutMe"></div>
      <div className="box image"></div>
      <div className="box reachOut"></div>
    </Layout>
  );
};
