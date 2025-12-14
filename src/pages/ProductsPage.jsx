import Header from "../components/Header.jsx";
import PlantCard from "../components/PlantCard.jsx";
import { plants } from "../../data/plants.js";

export default function Products() {
  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <>
      <Header />

      {/* Page Wrapper */}
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white px-6 py-10">
        <h1 className="text-4xl font-extrabold text-center text-green-800 mb-12">
          Our Plants Collection
        </h1>

        {categories.map(cat => (
          <section key={cat} className="mb-14">
            {/* Category Header */}
            <div className="mb-6 flex items-center gap-3">
              <div className="h-1 w-10 bg-green-600 rounded"></div>
              <h2 className="text-2xl font-bold text-green-700">
                {cat}
              </h2>
            </div>

            {/* Plant Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {plants
                .filter(p => p.category === cat)
                .map(plant => (
                  <PlantCard key={plant.id} plant={plant} />
                ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
