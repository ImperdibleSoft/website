import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';
import AppLayout from '../components/AppLayout';
import StyledComponentsRegistry from '../components/StyledComponentsRegistry';
import { appName, description } from '../constants';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: appName,
  description
};

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => (
  <html lang="en">
    <body className={inter.className}>
      <StyledComponentsRegistry>
        <AppLayout>{children}</AppLayout>
      </StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;
