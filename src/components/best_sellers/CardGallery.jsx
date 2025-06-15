import React, { useState } from "react";

const allCards = [
  { id: 1, title: "Card 1", desc: "This is card 1" },
  { id: 2, title: "Card 2", desc: "This is card 2" },
  { id: 3, title: "Card 3", desc: "This is card 3" },
  { id: 4, title: "Card 4", desc: "This is card 4" },
  { id: 5, title: "Card 5", desc: "This is card 5" },
  { id: 6, title: "Card 6", desc: "This is card 6" },
  { id: 7, title: "Card 7", desc: "This is card 7" },
  { id: 8, title: "Card 8", desc: "This is card 8" },
  { id: 9, title: "Card 9", desc: "This is card 9" },
  { id: 10, title: "Card 10", desc: "This is card 10" },
  { id: 11, title: "Card 11", desc: "This is card 11" },
  { id: 12, title: "Card 12", desc: "This is card 12" },
  { id: 13, title: "Card 13", desc: "This is card 13" },
];

const CardGallery = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleToggle = () => {
    if (visibleCount >= allCards.length) {
      setVisibleCount(6); // Show less
    } else {
      setVisibleCount((prev) => Math.min(prev + 6, allCards.length)); // Load more
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Card Gallery</h1>

      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {allCards.slice(0, visibleCount).map((card) => (
          <div
            key={card.id}
            className="bg-white p-6 shadow-lg rounded-xl hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-600">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* Load More / Show Less Button */}
      <div className="text-center mt-8">
        <button
          onClick={handleToggle}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          {visibleCount >= allCards.length ? "Show Less" : "Load More"}
        </button>
      </div>
    </div>
  );
};

export default CardGallery;
