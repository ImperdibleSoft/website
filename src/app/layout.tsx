import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';
import AppLayout from '../components/AppLayout';
import StyledComponentsRegistry from '../components/StyledComponentsRegistry';
import { appName, brand, description } from '../constants';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: appName,
  description
};

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <html lang="en">
      <head>
        <title>{appName}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content={brand} />

        <link rel="manifest" href="manifest.json" />
        <link rel="shortcut icon" href="/logo.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />

        <script
          async
          src="https://cdn.jsdelivr.net/npm/pwacompat"
          crossOrigin="anonymous"
        />
      </head>

      <body className={inter.className}>
        <StyledComponentsRegistry>
          <AppLayout>{children}</AppLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
