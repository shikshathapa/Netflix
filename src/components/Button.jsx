import { useState } from "react";

const Button = () => {
  const [selectedRegion, setSelectedRegion] = useState("India");
  const [selectedCategory, setSelectedCategory] = useState("Movies");

  return (
    <div className="p-4 border-red-700">
      <div className="flex flex-col md:flex-row md:justify-start gap-4 mb-4">
        {/* Region Dropdown */}
        <div className="flex gap-4">
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="px-4 py-2 rounded bg-gray-800 text-white"
          >
            <option value="India">India</option>
            <option value="India">India</option>
            <option value="India">India</option>
            <option value="India">India</option>
            <option value="India">India</option>
            <option value="India">India</option>
            <option value="Global">Global</option>
          </select>
        </div>

        {/* Category Dropdown */}
        <div className="flex gap-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 rounded bg-gray-800 text-white"
          >
            <option value="Movies">Movies</option>
            <option value="TV Shows">TV Shows</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Button;
