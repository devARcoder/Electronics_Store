// src/components/CardSlider.jsx
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  { id: 1, title: "Card 1", desc: "This is card 1" },
  { id: 2, title: "Card 2", desc: "This is card 2" },
  { id: 3, title: "Card 3", desc: "This is card 3" },
  { id: 4, title: "Card 4", desc: "This is card 4" },
  { id: 5, title: "Card 5", desc: "This is card 5" },
];

const CardSlider = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth / 1.5;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Card container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 scroll-smooth no-scrollbar py-6"
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="min-w-[250px] bg-white rounded-xl shadow-lg p-6 flex-shrink-0"
          >
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            <p className="text-gray-600">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
};

export default CardSlider;
