import Head from 'next/head';
import NotFound from '../components/NotFound';

const Home = () => (
  <div className="container">
    <Head>
      <title>People Corp - The Benefit Calculator</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <NotFound />
  </div>
);

export default Home;
