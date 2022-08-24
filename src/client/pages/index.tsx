import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
// import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Nest Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
    </div>
  );
};

export default Home;
