import "@primer/primitives/dist/css/functional/themes/light.css";
import { Analytics } from "@vercel/analytics/next";
import { BaseStyles, ThemeProvider } from "@primer/react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Analytics />
      <ThemeProvider>
        <BaseStyles>
          <Component {...pageProps} />
        </BaseStyles>
      </ThemeProvider>
    </>
  );
}
