import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Gabriel's stuff</title>
        <meta name="description" content="Small animation demos" key="desc" />
      </Head>
      <Component {...pageProps} />)
    </div>
  );
}

export default MyApp;
