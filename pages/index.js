import Head from 'next/head';

import Navbar from '../components/navigation/Navbar';
import Home from '../components/Home/Home';
import Overview from '../components/Overview/Overview';
import Changelog from '../components/Overview/Changelog';

export default function index() {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Project Manager v0.1</title>
        <meta
          name="description"
          content="Project Manager for web developent applications."
        />
        <link rel="icon" href="/code.svg" />
      </Head>
      <div className="relative min-h-screen md:flex">
        <Navbar />
        {/* <Home /> */}
        {/* <Overview /> */}
        {/* <Changelog /> */}
        STACK
      </div>
    </div>
  );
}
