import type { ReactNode } from 'react';
import './globals.css';

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto p-4 max-w-7xl text-slate-700">
          {children}
        </div>
      </body>
    </html>
  )
}
