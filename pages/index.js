import Head from 'next/head';
import SlideDeck from '../components/lib/SlideDeck';

const Home = () => (
  <div className="container">
    <Head>
      <title>People Corp - The Benefit Calculator</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <SlideDeck />
  </div>
);

export default Home;
