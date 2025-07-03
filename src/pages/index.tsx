import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function RedirectToLogin() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/login');
  }, [router]);

  return null; // or a loading spinner if you want
}
