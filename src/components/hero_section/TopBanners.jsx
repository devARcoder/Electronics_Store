import { useState, useEffect } from 'react';
import { slides } from '../../data/data';
import { Button } from '../shared/imports';
import OfferProducts from './OfferProducts';
const TopBanners = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => setCurrent(index);
  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <>
    <div className="w-full bg-gray-100 relative overflow-hidden py-32 sm:py-28 md:py-0">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-[500px] flex items-center">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">

          <div className="text-center md:text-left md:w-1/2 transition-all duration-700 ease-in-out">
            <h1 key={slides[current].title} className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight transition-opacity duration-500 opacity-100">
              {slides[current].title}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600">
              {slides[current].description}
            </p>
            <Button name="Shope Now" className="bg-yellow-300 text-black hover:bg-gray-800 hover:text-white" />
          </div>

          <div className="w-full md:w-1/2 flex justify-center transition-all duration-700 ease-in-out ">
            <img
              key={slides[current].image}
              src={slides[current].image}
              alt="Smartwatch"
              className="w-full max-w-md object-contain transition-opacity duration-700 opacity-100"
              />
          </div>
        </div>
      </div>


      <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200">
        ❮
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200">
        ❯
      </button>


      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <button
          key={i}
          onClick={() => goToSlide(i)}
          className={`w-3 h-3 rounded-full ${i === current ? 'bg-yellow-400' : 'bg-gray-400'} transition-all`}
          />
        ))}
      </div>
    </div>
    <OfferProducts/>
        </>
  );
};

export default TopBanners;
