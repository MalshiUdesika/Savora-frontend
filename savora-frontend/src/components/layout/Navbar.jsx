import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="text-3xl font-bold text-pink-600"
        >
          Savora
        </Link>

        <div className="flex gap-6">

          <Link to="/">
            Home
          </Link>

          <Link to="/menu">
            Menu
          </Link>

          <Link to="/reservation">
            Reservation
          </Link>

          <Link to="/login">
            Login
          </Link>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;