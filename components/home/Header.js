function Header({ globalUser }) {
  return (
    <div className="text-center py-6 space-y-4">
      <h1 className="text-3xl">Welcome, {globalUser.email}</h1>
      <p className="mx-auto font-light font-md p-4 text-gray-700 bg-gray-100 rounded">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using.
      </p>
    </div>
  );
}

export default Header;
