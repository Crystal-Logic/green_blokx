import { PropsWithChildren } from 'react';
import React from 'react';

import { Footer } from 'components/Footer';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};
