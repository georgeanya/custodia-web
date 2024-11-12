import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";

import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-81RCEPC1Q1"
        ></script>
        <script type="text/javascript">
          {`  window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-81RCEPC1Q1');`}
        </script> */}
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MK9F4DN');`,
          }}
        />
      </Head>

      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MK9F4DN"
            height="0" width="0" style="display:none;visibility:hidden" />`,
        }}
      />
      <NextUIProvider navigate={router.push}>
        <NextThemesProvider defaultTheme="light" forcedTheme="light">
          <Component {...pageProps} />
        </NextThemesProvider>
      </NextUIProvider>
    </>
  );
}

export const fonts = {
  sans: "Circular Std",
  mono: "Circular Std, 'Circular Std'",
};
