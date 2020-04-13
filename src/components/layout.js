import React from 'react';

import './layout.scss';

const Layout = ({ children }) => {
  return <main className="wrapper">{children}</main>;
};

export default Layout;
