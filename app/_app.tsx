import AppProviders from "@/common/context";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { AppProps } from "next/app";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        {/* eslint-disable-next-line */}
        <script type="text/javascript" src="//js.hsforms.net/forms/shell.js" />
      </Head>
      <Analytics />
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
        <>
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        </>
      )}
      <AppProviders>
        <Component {...pageProps} />
      </AppProviders>
    </>
  );
};

export default MyApp;
