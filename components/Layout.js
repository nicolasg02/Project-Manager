import Navbar from '../components/navigation/Navbar';
function Layout(props) {
  return (
    <div className="relative min-h-screen md:flex">
      <Navbar />
      {props.children}
    </div>
  );
}

export default Layout;
