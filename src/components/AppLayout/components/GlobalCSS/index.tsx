'use client';
import React from 'react';
import { ResetCSS } from './ResetCSS.globalStyles';

const GlobalCSS = ({ children }: React.PropsWithChildren<{}>) => (
  <>
    <ResetCSS />

    {children}
  </>
);

export default GlobalCSS;
