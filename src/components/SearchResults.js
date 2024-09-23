import React from 'react';

function SearchResults({ results, setSelectedImage }) {
  if (results.length === 0) return null;

  return (
    <div className="bg-white shadow-lg rounded-2xl p-8">
      <h2 className="text-xl font-bold text-blue-900 mb-6">RESULTS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {results.slice(0, 4).map((filename, index) => (
          <div key={index} className="group cursor-pointer" onClick={() => setSelectedImage(filename)}>
            <div className="relative overflow-hidden rounded-lg shadow-md bg-blue-100">
              <img
                src={`/image/${filename}`}
                alt={`Result ${index + 1}`}
                className="w-full h-48 sm:h-40 lg:h-32 object-cover transition duration-300 ease-in-out transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-25 transition-opacity duration-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;