import Head from 'next/head';

import Home from './home';

export default function index() {
  return (
    <div className="bg-white max-h-screen overflow-y-scroll flex-1">
      <Head>
        <title>Project Manager v0.1</title>
        <meta
          name="description"
          content="Project Manager for web developent applications."
        />
        <link rel="icon" href="/code.svg" />
      </Head>
      <Home />
    </div>
  );
}
