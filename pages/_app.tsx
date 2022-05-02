/**
 * The setup for this page is based on the official mui-next example.
 * It is used under MIT license (with same license notice as mui).
 * @see https://github.com/mui/material-ui/blob/master/examples/nextjs/pages/_app.js
 */
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createCache, { EmotionCache } from "@emotion/cache";
import theme from "@/themes/theme";
import NavBar from "@/components/nav/NavBar";
import MainFooter from "@/components/footer/MainFooter";

interface Props {
  Component: PropTypes.ReactComponentLike;
  pageProps: object;
}

const cache: EmotionCache = createCache({
  key: "css",
  prepend: true,
});
cache.compat = true;

function App(props: Props) {
  const { Component, pageProps } = props;
  return (
    <CacheProvider value={cache}>
      <Head>
        <title>Navlead</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavBar />
          <Component {...pageProps} />
          <MainFooter />
        </ThemeProvider>
      </StyledEngineProvider>
    </CacheProvider>
  );
}

export default App;
