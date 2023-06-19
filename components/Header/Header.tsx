'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import RequestButton from '#/components/RequestButton';

export default function Header() {
  const path = usePathname();
  const showRequestButton = path === '/';

  return (
    <header className="px-8 py-4 h-[80px] flex items-center justify-end">
      {showRequestButton && (
        <Link href="/request">
          <RequestButton />
        </Link>
      )}
    </header>
  );
}