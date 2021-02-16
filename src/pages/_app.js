import Head from 'next/head';

import GlobalStyle from 'src/utils/GlobalStyle';

const webfont = {
  server: 'https://fonts.gstatic.com',
  stylesheet:
    'https://fonts.googleapis.com/css2?family=Poppins:wght@100;300&display=swap',
}; // See https://csswizardry.com/2020/05/the-fastest-google-fonts/
export default function App({Component, pageProps}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* This tag would cause an error if it were in _document.js. See https://github.com/vercel/next.js/blob/master/errors/no-document-viewport-meta.md */}
        {/*** Web font loading ***/}
        <link rel="preconnect" href={webfont.server} />
        {/* For faster web font loading. */}
        <link rel="preload" as="style" href={webfont.stylesheet} />
        {/* For faster web font loading. */}
        <link
          rel="stylesheet"
          href={webfont.stylesheet}
          media="print"
          onload="this.media='all'"
        />
        {/* For actually reading the @font-face stylesheet. It's also a fallback for browsers incompatible with <link rel="preload" />. */}
        <noscript>
          <link rel="stylesheet" href={webfont.stylesheet} />
        </noscript>
        {/* Fallback for JavaScript-disabled browsers.  */}
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />{' '}
    </>
  );
}
