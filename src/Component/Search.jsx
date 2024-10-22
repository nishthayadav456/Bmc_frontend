import React from "react";
import { useLocation } from "react-router-dom";

export const Search = () => {
  const location = useLocation();
  const results = location.state?.results || [];
  const searchTerm = location.state?.searchTerm || "";

  return (
    <div>
      
      <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold ">
          Search Results for "{searchTerm}"
        </h2>

        <h2  className="text-2xl text-gray-500 mb-4">within BMC Bioinformatics</h2>
        {results.length > 0 ? (
          <ul>
            {results.map((result) => (
              <li key={result._id} className="mb-4">
                <h3 className="text-xl font-semibold text-purple-900">{result.title}</h3>
                <p className="text-gray-700">{result.authors}</p>
                <p className="text-gray-500">{result.citation}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found for "{searchTerm}".</p>
        )}
      </div>
    </div>
  );
};
