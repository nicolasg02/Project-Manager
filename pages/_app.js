import { useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import Layout from '../components/Layout';
import RegisterOrLogin from '../components/RegisterOrLogin';
import firebaseApp from '../firebase-config';

import '../styles/globals.css';

const auth = getAuth(firebaseApp);

function MyApp({ Component, pageProps }) {
  const [signedIn, setSignedIn] = useState(false);

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setSignedIn(true);
    } else {
      setSignedIn(false);
    }
  });

  if (signedIn) {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  } else {
    return <RegisterOrLogin />;
  }
}

export default MyApp;
