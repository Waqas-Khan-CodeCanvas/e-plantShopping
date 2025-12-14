import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div
      className="h-screen bg-contain bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/image copy 6.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content Card */}
      <div className="relative z-10 text-center bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-2xl max-w-lg">
        <h1 className="text-5xl font-extrabold text-white tracking-wide">
          GreenLeaf
        </h1>

        <p className="mt-4 text-lg text-gray-100 leading-relaxed">
          Bring nature indoors with hand-picked, affordable houseplants
          that brighten your space and your mood.
        </p>

        <Link
          to="/products"
          className="inline-block mt-8 px-8 py-4 rounded-full
                     bg-gradient-to-r from-green-500 to-emerald-600
                     text-white font-semibold text-lg
                     shadow-lg hover:scale-105 hover:shadow-xl
                     transition-all duration-300"
        >
          🌱 Get Started
        </Link>
      </div>
    </div>
  );
}
