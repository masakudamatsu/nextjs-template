import GlobalStyle from '../utils/GlobalStyle';

export default function App({Component, pageProps}) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />{' '}
    </>
  );
}
