'use client';
import { usePathname } from 'next/navigation';
import React, { PropsWithChildren, useEffect } from 'react';

const ScrollToTop = ({ children }: PropsWithChildren): JSX.Element => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
};

export default ScrollToTop;
