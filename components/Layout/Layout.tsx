import { PropsWithChildren } from 'react';
import React from 'react';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};
