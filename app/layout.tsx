import type { ReactNode } from 'react';
import './globals.css';
import Header from '#/components/Header';
import ReactQueryProvider from '#/components/ReactQueryProvider';

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <Header />
          <div className="mx-auto p-4 max-w-7xl text-slate-700">
            {children}
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
