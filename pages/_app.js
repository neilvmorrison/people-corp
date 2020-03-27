import App from 'next/app';
import { ThemeProvider } from 'react-jss';
import defaultTheme from '../components/lib/theme';
import NavBar from '../components/NavBar';

const subDomains = [
  {
    subdomain: 'not-neat-company',
    colors: {
      primary: '#E91E63',
      secondary: '#FFC107',
    },
  },
  {
    subdomain: 'neat-company',
    colors: {
      primary: '#9C27B0',
      secondary: '#03A9F4',
    },
  },
];

function getSubDomain(req) {
  let host;
  let sub;
  if (req && req.headers.host) {
    host = req.headers.host;
  }
  if (typeof window !== 'undefined') {
    host = window.location.host;
  }
  if (host) {
    sub = host.split(process.env.domain)[0];
    if (sub) {
      return sub.split('.')[0];
    }
  }
}

function makeTheme(colors) {
  const theme = {
    ...defaultTheme,
    colors: {
      primary: colors.primary,
      secondary: colors.secondary ? colors.secondary : '#FFC107',
    },
  };
  return theme;
}

export default class MyApp extends App {
  render() {
    const { Component, colors, pageProps } = this.props;
    const theme = makeTheme(colors);
    return (
      <ThemeProvider theme={theme}>
        <NavBar />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

MyApp.getInitialProps = async (appContext) => {
  const subDomain = getSubDomain(appContext.ctx.req);
  // some form of network call to load subdomains

  const { colors } = subDomains.find(
    (domain) => domain.subdomain === subDomain,
  );
  return { colors };
};
