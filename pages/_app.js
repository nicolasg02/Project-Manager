import { useState } from 'react';

import RegisterOrLogin from '../components/RegisterOrLogin';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [signedIn, setSignedIn] = useState(true);

  if (signedIn) {
    return <Component {...pageProps} />;
  } else {
    return <RegisterOrLogin />;
  }
}

export default MyApp;
