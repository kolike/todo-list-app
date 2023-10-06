import { Inter } from 'next/font/google';
import StyledComponentsRegistry from '../lib/registry';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Todo List App',
  description: 'my todo list app',
};

export default function RootLayout({ children }:{children: React.ReactNode}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: 'rgba(255, 255, 204 ,0.7)' }} className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
