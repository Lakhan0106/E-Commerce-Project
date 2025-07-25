import React, { useState, useEffect } from "react";
import FilterData from "./FilterDate"
import ProductCard from "./ProductCard";
import productsData from "../../Data/products.json" // Adjust path if needed

const Product = () => {
  const [filters, setFilters] = useState({
    colors: [],
    sizes: [],
    price: "",
    discount: "",
    availability: "",
  });

  const [sortOption, setSortOption] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  // Apply filters whenever filters or sortOption changes
  useEffect(() => {
    let result = [...productsData];

    // Color Filter
    if (filters.colors.length > 0) {
      result = result.filter((product) => filters.colors.includes(product.color));
    }

    // Size Filter
    if (filters.sizes.length > 0) {
      result = result.filter((product) => filters.sizes.includes(product.size));
    }

    // Price Filter
    if (filters.price) {
      const [min, max] = filters.price.split("-").map(Number);
      result = result.filter((product) => product.price >= min && product.price <= max);
    }

    // Discount Filter
    if (filters.discount) {
      result = result.filter((product) => product.discount >= filters.discount);
    }

    // Availability Filter
    if (filters.availability === "In Stock") {
      result = result.filter((product) => product.inStock === true);
    } else if (filters.availability === "Out Of Stock") {
      result = result.filter((product) => product.inStock === false);
    }

    // Sorting
    if (sortOption === "lowToHigh") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === "highToLow") {
      result.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(result);
  }, [filters, sortOption]);

  // Handle filter updates
  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => {
      if (filterType === "colors" || filterType === "sizes") {
        const isSelected = prev[filterType].includes(value);
        const updated = isSelected
          ? prev[filterType].filter((v) => v !== value)
          : [...prev[filterType], value];
        return { ...prev, [filterType]: updated };
      } else {
        return { ...prev, [filterType]: value };
      }
    });
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Filter Sidebar */}
      <FilterData filters={filters} handleFilterChange={handleFilterChange} />

      {/* Product List & Sorting */}
      <div className="w-full md:w-3/4 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Products</h2>

          {/* Sorting */}
          <select
            className="border border-gray-300 rounded px-2 py-1"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>

        {/* Products */}
        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500">No products match your filters.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
