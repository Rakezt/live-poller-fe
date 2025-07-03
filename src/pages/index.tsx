import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function RedirectToLogin() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/login');
  }, [router]);

  return (
    <>
      <Head>
        <title>Live Poller | Real-Time Polling App</title>
        <meta
          name='description'
          content='Create and vote on live polls instantly. Real-time results. Simple and interactive.'
        />
        <meta name='robots' content='index, follow' />
        <meta
          property='og:title'
          content='Live Poller | Real-Time Polling App'
        />
        <meta
          property='og:description'
          content='Create and vote on live polls instantly. Real-time results. Simple and interactive.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://live-poller.netlify.app/' />
        <meta
          property='og:image'
          content='https://live-poller.netlify.app/preview-image.png'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Live Poller | Real-Time Polling App'
        />
        <meta
          name='twitter:description'
          content='Create and vote on live polls instantly. Real-time results. Simple and interactive.'
        />
        <meta
          name='twitter:image'
          content='https://live-poller.netlify.app/preview-image.png'
        />
        <link rel='canonical' href='https://live-poller.netlify.app/' />
      </Head>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '80vh',
        }}
      >
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
          Redirecting to login...
        </p>
      </div>
    </>
  );
}
