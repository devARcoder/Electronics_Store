import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Plus, Minus } from 'lucide-react';
import { faqs, faqsAccordians } from '../data/data';
import AllProducts from '../components/all_Products/AllProducts';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
    <div className='px-4 py-4 md:px-24'>
      {/* Breadcrumb */}
      <div className='flex items-center text-gray-500 py-6 space-x-1'>
        <Link className='text-[15px] hover:text-yellow-400' to="/">Home</Link>
        <ChevronRight size={18} color='gray' />
        <Link className='text-[15px] hover:text-yellow-300' to="/faqs">Frequently Asked Questions</Link>
      </div>

      {/* Shipping Info Section */}
      <div>
        <h1 className='border-b-2 border-yellow-400 text-xl text-gray-700 font-semibold w-56 pb-3'>Shipping Information</h1>
        <hr className='text-gray-300' />
      </div>

      <div className="faqs grid grid-cols-1 gap-6 md:grid-cols-2 py-10">
        {faqs.map((item, i) => (
          <div className="space-y-6 py-3" key={i}>
            <h1 className='text-lg font-bold text-gray-700'>{item.question}</h1>
            <p className='text-gray-700 text-[15px]'>{item.answer}</p>
          </div>
        ))}
      </div>

      {/* FAQ Accordion Section */}
      <div>
        <h1 className='border-b-2 border-yellow-400 text-xl text-gray-700 font-semibold w-64 pb-3'>Frequently Asked Questions</h1>
        <hr className='text-gray-300' />
      </div>

      <div className="grid grid-cols-1 gap-6 py-6">
        {faqsAccordians.map((accordion, i) => (
          <div key={i} className="border-b border-gray-300">
            <div
              className="flex justify-between items-center py-3 cursor-pointer"
              onClick={() => toggleAccordion(i)}
            >
              <h1 className='text-lg font-bold text-gray-700'>{accordion.question}</h1>
              {activeIndex === i ? <Minus /> : <Plus />}
            </div>
            {activeIndex === i && (
              <p className='text-gray-600 text-[15px] pb-4 transition-all duration-300'>{accordion.answer}</p>
            )}
          </div>
        ))}
      </div>

    </div>
      <AllProducts/>
    </>
  );
};

export default FAQs;
