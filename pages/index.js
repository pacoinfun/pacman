import React, { useEffect } from 'react'
import Head from 'next/head'

const Index = () => {
  useEffect(() => {
    // Client-side yönlendirme
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path === '/') {
        window.location.href = '/index.html';
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>Pacman</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <style jsx global>{`
        html,
        body,
        #__next {
          height: 100%;
          margin: 0;
          padding: 0;
          overflow: hidden;
        }
      `}</style>
      <iframe
        src='/index.html'
        width='100%'
        height='100%'
        frameBorder='0'
        allow="autoplay"
      />
    </>
  )
}

export default Index
