import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import DiagonalAccent from '../components/diagonalAccent';
import Name from '../components/name';
import AboutMe from '../components/aboutMe';
import Image from '../components/image';
import ReachOut from '../components/reachOut/reachOut';

export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ashley Simpson</title>
        <link rel="canonical" href="https://ashleysimpson.dev" />
        <html lang="en" />
      </Helmet>
      <Layout>
        <DiagonalAccent />
        <Name />
        <AboutMe />
        <Image />
        <ReachOut />
      </Layout>
    </>
  );
};
