import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebaseApp from '../firebase-config';
const auth = getAuth(firebaseApp);

import { useState } from 'react';

import RegisterOrLogin from '../components/RegisterOrLogin';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [signedIn, setSignedIn] = useState(false);

  onAuthStateChanged(auth, (currentUser) => {
    currentUser ? setSignedIn(true) : setSignedIn(false);
  });

  if (signedIn) {
    return <Component {...pageProps} />;
  } else {
    return <RegisterOrLogin />;
  }
}

export default MyApp;
