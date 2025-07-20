import React from 'react';

const categories = ["general", "technology", "sports", "business"];

function Header({ selectedCategory, setSelectedCategory }) {
  return (
    <header className="bg-blue-900 text-white py-4 px-4">
      {/* Logo and Title */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-screen-lg mx-auto">
        <div className="flex items-center gap-3">
          <img src="Logo.png" alt="NewsNow Logo" className="h-10 rounded-full" />
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-400">
            News<span className="text-red-500">Now</span>
          </h1>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center sm:justify-end gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-3 py-1 rounded font-semibold text-sm sm:text-base transition 
                ${selectedCategory === cat ? "bg-yellow-600 text-white" : "bg-blue-500 hover:bg-blue-600"}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
