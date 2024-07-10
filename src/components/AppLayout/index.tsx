'use client';
import { usePathname } from 'next/navigation';
import React, { PropsWithChildren, useEffect } from 'react';
import { version } from '../../constants';
import { clearOldCaches, initialize, logNavigation } from '../../utils';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import GlobalCSS from './components/GlobalCSS';
import Header from './components/Header';
import Messenger from './components/Messenger';
import ScrollToTop from './components/ScrollToTop';
import { AppLayoutContent, AppLayoutWrapper } from './styles';

const registerServiceWorker = async () => {
  if (process.env.NODE_ENV !== 'development' && 'serviceWorker' in navigator) {
    await navigator.serviceWorker.register('/service-worker.js');
  }
};

const AppLayout = ({ children }: PropsWithChildren): JSX.Element => {
  const pathname = usePathname();

  useEffect(() => {
    initialize();
    clearOldCaches(version);
    registerServiceWorker();
  }, []);

  useEffect(() => {
    logNavigation(pathname);
  }, [pathname]);

  return (
    <ScrollToTop>
      <GlobalCSS>
        <AppLayoutWrapper>
          <Header />

          <AppLayoutContent>
            {children}

            <ContactSection />
          </AppLayoutContent>

          <Footer />
          <Messenger />
        </AppLayoutWrapper>
      </GlobalCSS>
    </ScrollToTop>
  );
};

export default AppLayout;
