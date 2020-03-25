import { useEffect } from 'react';
import App from 'next/app';
import Router from 'next/router';
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
      primary: colors.primary ? colors.primary : '#03A9F4',
      secondary: colors.secondary ? colors.secondary : '#FFC107',
    },
  };
  return theme;
}

function MyApp({ Component, colors, pageProps, subDomain }) {
  const theme = makeTheme(colors);

  useEffect(() => {
    if (typeof subDomain === 'undefined') {
      Router.push('/not-found');
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const subDomain = getSubDomain(appContext.ctx.req);
  console.log(subDomain);
  // some form of network call to load subdomains
  let colors = {};
  if (subDomain) {
    const { colors: foundColors } = subDomains.find(
      (domain) => domain.subdomain === subDomain,
    );
    colors = foundColors;
  }
  return { colors, subDomain };
};

export default MyApp;
