import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebaseApp from '../firebase-config';
const auth = getAuth(firebaseApp);
import { useState } from 'react';

import Layout from '../components/Layout';
import RegisterOrLogin from '../components/RegisterOrLogin';

import '../styles/globals.css';

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
