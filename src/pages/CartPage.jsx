import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeItem,
} from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

export default function Cart() {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );

  const cartItems = Object.values(items);

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white px-6 py-10">
        <h1 className="text-4xl font-extrabold text-center text-green-800 mb-10">
          Your Shopping Cart
        </h1>

        {/* Summary */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6 mb-8 flex justify-between items-center">
          <p className="text-lg font-medium">
            🌱 Total Plants: <span className="font-bold">{totalQuantity}</span>
          </p>
          <p className="text-lg font-medium">
            💰 Total Cost:{" "}
            <span className="font-bold text-green-700">
              ${totalPrice}
            </span>
          </p>
        </div>

        {/* Cart Items */}
        <div className="max-w-4xl mx-auto space-y-6">
          {cartItems.length === 0 && (
            <p className="text-center text-gray-500 text-lg">
              Your cart is empty 🌿
            </p>
          )}

          {cartItems.map(item => (
            <div
              key={item.id}
              className="flex items-center gap-6 bg-white rounded-2xl shadow-md p-5"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="h-24 w-24 object-contain rounded-lg"
              />

              {/* Info */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-green-700 font-semibold">
                  ${item.price} each
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => dispatch(decreaseQty(item.id))}
                  className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 transition"
                >
                  −
                </button>

                <span className="font-semibold w-6 text-center">
                  {item.quantity}
                </span>

                <button
                  onClick={() => dispatch(increaseQty(item.id))}
                  className="w-8 h-8 rounded-full bg-green-600 text-white hover:bg-green-700 transition"
                >
                  +
                </button>
              </div>

              {/* Delete */}
              <button
                onClick={() => dispatch(removeItem(item.id))}
                className="text-red-500 hover:text-red-700 font-medium transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Actions */}
        {cartItems.length > 0 && (
          <div className="max-w-4xl mx-auto mt-10 flex flex-col sm:flex-row gap-4 justify-between">
            <button
              className="px-6 py-3 rounded-full bg-gray-400 text-white font-semibold cursor-not-allowed"
            >
              Checkout (Coming Soon)
            </button>

            <Link
              to="/products"
              className="px-6 py-3 rounded-full
                         bg-gradient-to-r from-green-500 to-emerald-600
                         text-white font-semibold text-center
                         hover:from-green-600 hover:to-emerald-700
                         transition-all"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
