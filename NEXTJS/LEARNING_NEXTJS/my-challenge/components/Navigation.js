import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function Navigation() {
  const router = useRouter();
  const route = router.asPath;
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
      <pre>Current page: {route}</pre>
    </>
  );
}
