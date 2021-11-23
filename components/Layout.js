import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

import Modal from './Modal';
import Navbar from '../components/navigation/Navbar';

function Layout(props) {
  const { toggleModal } = useContext(UserContext);

  return (
    <>
      <div className="relative min-h-screen md:flex">
        {toggleModal && <Modal />}
        <Navbar />
        {props.children}
      </div>
    </>
  );
}

export default Layout;
