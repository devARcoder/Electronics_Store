import React from 'react'
import AboutBanners from '../components/about/AboutBanners'
import AllProducts from '../components/all_Products/AllProducts'
import AboutTeams from '../components/about/AboutTeams'
import AboutDetails from '../components/about/AboutDetails'

const About = () => {
  return (
    <>
      <AboutBanners/>
      <AboutTeams/>
      <AboutDetails/>
      <AllProducts/>
    </>
  )
}

export default About
