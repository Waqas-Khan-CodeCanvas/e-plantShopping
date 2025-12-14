import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

export default function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const inCart = items[plant.id];

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5">
      {/* Image */}
      <div className="overflow-hidden rounded-xl">
        <img
          src={plant.image}
          alt={plant.name}
          className="h-40 w-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Info */}
      <div className="text-center mt-4">
        <h3 className="text-lg font-bold text-gray-800">
          {plant.name}
        </h3>

        <p className="text-green-700 font-semibold text-lg mt-1">
          ${plant.price}
        </p>

        {/* Button */}
        <button
          disabled={inCart}
          onClick={() => dispatch(addToCart(plant))}
          className="mt-4 w-full py-2 rounded-full
                     bg-gradient-to-r from-green-500 to-emerald-600
                     text-white font-medium
                     hover:from-green-600 hover:to-emerald-700
                     disabled:from-gray-400 disabled:to-gray-400
                     transition-all duration-300"
        >
          {inCart ? "✓ Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
