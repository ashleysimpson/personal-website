import React from 'react';

import Layout from '../components/layout';
import DiagonalAccent from '../components/diagonalAccent';

export default () => {
  return (
    <Layout>
      <DiagonalAccent />
      <div className="box name"></div>
      <div className="box aboutMe"></div>
      <div className="box image"></div>
      <div className="box reachOut"></div>
    </Layout>
  );
};
