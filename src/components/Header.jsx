import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const totalQuantity = useSelector(
    (state) => state.cart.totalQuantity
  );

  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          to="/products"
          className="text-2xl font-extrabold text-green-700 tracking-wide"
        >
          🌱 GreenLeaf
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <Link
            to="/products"
            className={`font-medium transition
              ${pathname === "/products"
                ? "text-green-700"
                : "text-gray-600 hover:text-green-600"}
            `}
          >
            Products
          </Link>

          <Link
            to="/cart"
            className={`relative font-medium transition
              ${pathname === "/cart"
                ? "text-green-700"
                : "text-gray-600 hover:text-green-600"}
            `}
          >
            🛒 Cart

            {/* Cart Badge */}
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-4 bg-green-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {totalQuantity}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
