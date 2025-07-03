import React from 'react'
import { NewsData } from '../../data/data'
const News = () => {
  return (
    <div>
      {NewsData.map((news, i)=> (
        <div className="" key={i}>
            <img src={news.image} alt={news.title} />
            <h1>{news.title}</h1>
        </div>
      ))}
    </div>
  )
}

export default News
