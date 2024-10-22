import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const Home = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleSearch = async () => {
    if (!query) return;
    try {
      const { data } = await axios.get(
        `https://bmc-backend-et1l.onrender.com/api/search?query=${query}`
      );
      navigate("/search", { state: { results: data, searchTerm: query } });
      console.log(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };
  return (
    <div>
      <nav class="bg-gray-800 p-4">
        <div class="container mx-auto flex items-center justify-between">
          <div class="text-white text-2xl font-bold">BMC Bioinformatics</div>

          <div class="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-[26rem]"
            />
            <button
              onClick={handleSearch}
              className="absolute right-0 top-0 h-full px-4 text-white bg-blue-500 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Search
            </button>
          </div>

          <div class="space-x-4">
            <a href="#" class="text-gray-300 hover:text-white">
              Home
            </a>
            <a href="#" class="text-gray-300 hover:text-white">
              About
            </a>
            <a href="#" class="text-gray-300 hover:text-white">
              Articles
            </a>
          </div>
        </div>
      </nav>
      <h2>This is a Home page</h2>
    </div>
  );
};
