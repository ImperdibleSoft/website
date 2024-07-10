import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';
import AppLayout from '../components/AppLayout';
import StyledComponentsRegistry from '../components/StyledComponentsRegistry';
import { appName, brand, description, EMAIL, NAME } from '../constants';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: appName
  },
  applicationName: appName,
  creator: `${NAME} <${EMAIL}>`,
  description,
  manifest: './manifest.json',
  title: appName
};

export const viewport: Viewport = {
  themeColor: brand,
  userScalable: false
};

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logo.png" />

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
