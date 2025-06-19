import React from 'react'
import { aboutTeams } from '../../data/data'
const AboutTeams = () => {
  return (
    <div className='bg-gray-100 grid grid-cols-2 gap-5 sm:gap-x-36 md:gap-x-8 px-4 sm:px-24 mt-10 py-14 md:py-24 md:grid-cols-6'>
      {aboutTeams.map((team, i)=> (
        <div className="flex flex-col text-center space-y-2" key={i}>
            <img className='rounded-full' src={team.img} alt={team.name} />
            <h1 className='text-gray-800 text-xl font-bold'>{team.name}</h1>
            <p className='text-sm text-gray-600'>{team.position}</p>
        </div>
      ))}
    </div>
  )
}

export default AboutTeams
