import React from 'react'
import { aboutTeams } from '../../data/data'
const AboutTeams = () => {
  return (
    <div className='bg-gray-200 grid grid-cols-2 gap-3 md:grid-cols-6'>
      {aboutTeams.map((team, i)=> (
        <div className="" key={i}>
            <img className='rounded-full' src={team.img} alt={team.name} />
            <h1>{team.name}</h1>
            <p>{team.position}</p>
        </div>
      ))}
    </div>
  )
}

export default AboutTeams
