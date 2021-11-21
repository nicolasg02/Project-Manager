import { useState } from 'react';

import Modal from './Modal';
import Navbar from '../components/navigation/Navbar';

function Layout(props) {
  const [toggleModal, setToggleModal] = useState(false);

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
