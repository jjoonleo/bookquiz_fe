import NavBar from './components/navigation/navbar';

import type { Metadata } from 'next'
import { noto_sans_kr } from './fonts';
import './globals.css'


export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={noto_sans_kr.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
