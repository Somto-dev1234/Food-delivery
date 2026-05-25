const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="container-custom flex justify-between items-center py-6">

        <h1 className="text-4xl font-bold text-cyan-500">
          Foodie
        </h1>

        <ul className="hidden md:flex items-center gap-10 text-gray-600 font-medium">
          <li className="text-cyan-500">Home</li>
          <li>Order</li>
          <li>Company</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>

        <button className="bg-cyan-500 text-white w-14 h-14 rounded-xl text-xl">
          🛒
        </button>
      </div>
    </nav>
  );
};

export default Navbar;