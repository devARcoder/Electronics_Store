import React from 'react'
import { NewsData } from '../../data/data'
import { Button } from '../shared/imports'
import { MessageCircle } from 'lucide-react'
const News = () => {
  return (
    <div>
      {NewsData.map((news, i)=> (
        <div className="cursor-pointer md:w-4xl" key={i}>
            <img className='' src={news.image} alt={news.title} />
            <h1 className='text-lg text-gray-700 py-3 font-bold'>{news.title}</h1>

            <div className="flex space-x-1 text-gray-500 ">
                <p>{news.Published}</p>
                <span>&bull;</span>
                <p>Posted by {news.Posted}</p>
            </div>
            <hr className='text-gray-200 my-4'/>
            <div className="flex space-x-3 items-center pt-4 pb-12">

            <Button name="Read More" className="bg-gray-200 px-8 py-3 rounded-full text-gray-700"/>

            <div className="comments flex items-center space-x-1 text-gray-700">

            <MessageCircle className='w-6 h-6 text-gray-700'/>
            <p>{news.Comments}</p>
            </div>
            </div>
        </div>
      ))}
    </div>
  )
}

export default News
