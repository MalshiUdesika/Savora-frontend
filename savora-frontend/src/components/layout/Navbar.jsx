import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/src/assets/logo.png"
            alt="Savora Logo"
            className="w-12 h-12 object-contain"
          />

          <div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-wide">
              Savora
            </h1>

            <p className="text-xs text-orange-500 -mt-1">
              Premium Dining
            </p>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="font-medium text-gray-700 hover:text-orange-500 transition"
          >
            Home
          </Link>

          <Link
            to="/menu"
            className="font-medium text-gray-700 hover:text-orange-500 transition"
          >
            Menu
          </Link>

          <Link
            to="/reservation"
            className="font-medium text-gray-700 hover:text-orange-500 transition"
          >
            Reservations
          </Link>

          <Link
            to="/about"
            className="font-medium text-gray-700 hover:text-orange-500 transition"
          >
            About
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="px-5 py-2 border border-orange-500 text-orange-500 rounded-full font-medium hover:bg-orange-50 transition"
          >
            Login
          </Link>

          <Link
            to="/reservation"
            className="px-5 py-2 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition shadow-md"
          >
            Book Table
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;