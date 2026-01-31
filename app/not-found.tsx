'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import DiagonalAccent from './components/diagonalAccent';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [router]);

  return <DiagonalAccent />;
}
