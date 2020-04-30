import React from 'react';

import { useEffect } from 'react';
import { navigate } from 'gatsby';

import Layout from '../components/layout';
import DiagonalAccent from '../components/diagonalAccent';

export default function NotFound() {
  useEffect(() => {
    navigate('/');
  }, []);

  return (
    <Layout>
      <DiagonalAccent />
    </Layout>
  );
}
