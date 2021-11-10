import Head from 'next/head';

import Navbar from '../components/Navbar';
import Header from '../components/Header';

export default function index() {
  return (
    <div className="min-h-screen bg-gray-50 px-2">
      <Head>
        <title>Nicolas Garcia | Frontend Developer</title>
        <meta
          name="description"
          content="Personal portfolio, web development / frontend developer."
        />
        <link rel="icon" href="/code.svg" />
      </Head>
      <Navbar />
      <Header />
    </div>
  );
}
