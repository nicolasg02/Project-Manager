import Head from 'next/head';

import Navbar from '../components/Navbar';
import Home from '../components/Home';

export default function index() {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Nicolas Garcia | Frontend Developer</title>
        <meta
          name="description"
          content="Personal portfolio, web development / frontend developer."
        />
        <link rel="icon" href="/code.svg" />
      </Head>
      <div className="relative min-h-screen md:flex">
        <Navbar />
        <Home />
      </div>
    </div>
  );
}
