import React from 'react'
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { legalSections } from '../data/data';
import AllProducts from '../components/all_Products/AllProducts';
const TermsCondition = () => {
  return (
    <>
    <div className='px-4 py-4 md:px-24'>
      <div className='flex items-center text-gray-500 py-6 space-x-1'>
        <Link className='text-[15px] hover:text-yellow-400' to="/">Home</Link>
        <ChevronRight size={18} color='gray' />
        <Link className='text-[15px] hover:text-yellow-300' to="/terms">Terms & Conditions</Link>
      </div>
      <h1 className='text-3xl text-center text-gray-700 md:text-4xl'>Terms & Conditions</h1>

      <div className="">
        <div className="space-y-5">
      {legalSections.map((section) => (
          <div key={section.title} className=" py-5">
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-4">{section.title}</h2>
          <ul className="space-y-3 list-decimal px-6">
            {section.content.map((item) => (
                <li key={item.id} className="text-gray-700 text-sm">
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
      </div>
      <div className="py-8">
        <h1 className='text-2xl md:text-3xl text-gray-700 mb-4'>Changes To This Agreement</h1>
        <p>We reserve the right, at our sole discretion, to modify or replace these Terms and Conditions by posting the updated terms on the Site. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms and Conditions.

</p>
      </div>
      <div className="pb-4 md:pb-12">
        <h1 className='text-2xl md:text-3xl text-gray-700 mb-4'>Contact Us</h1>
        <p>If you have any questions about this Agreement, please contact us filling this <span className='font-bold'>contact form.</span></p>
      </div>
      
    </div>
    <AllProducts/>
      </>
  )
}

export default TermsCondition
