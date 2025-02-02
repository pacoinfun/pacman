import React from 'react'
import Head from 'next/head'

const Index = () => (
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
      src='/landing.html'
      width='100%'
      height='100%'
      frameBorder='0'
      allow="autoplay"
    />
  </>
)

export default Index
