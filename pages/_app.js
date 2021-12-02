import { useState } from 'react';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebaseApp from '../firebase-config';

import Layout from '../components/Layout';
import RegisterOrLogin from '../components/RegisterOrLogin';
import { UserContext } from '../context/UserContext';

import '../styles/globals.css';

const auth = getAuth(firebaseApp);

function MyApp({ Component, pageProps }) {
  const [signedIn, setSignedIn] = useState(false);
  const [globalUser, setGlobalUser] = useState(null);
  const [projectsArray, setProjectsArray] = useState(null);
  const [projectData, setProjectData] = useState(null);
  const [toggleModal, setToggleModal] = useState(false);

  const handleStartProject = () => {
    setToggleModal(true);
  };

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setGlobalUser(currentUser);
      setSignedIn(true);
    } else {
      setGlobalUser(null);
      setSignedIn(false);
    }
  });

  if (signedIn) {
    return (
      <UserContext.Provider
        value={{
          projectsArray,
          setProjectsArray,
          toggleModal,
          setToggleModal,
          globalUser,
          handleStartProject,
          projectData,
          setProjectData,
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContext.Provider>
    );
  } else {
    return <RegisterOrLogin />;
  }
}

export default MyApp;
