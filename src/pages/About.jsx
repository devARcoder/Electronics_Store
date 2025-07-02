import React from 'react'
import AboutBanners from '../components/about/AboutBanners'
import AllProducts from '../components/all_Products/AllProducts'
import AboutTeams from '../components/about/AboutTeams'
import AboutDetails from '../components/about/AboutDetails'
import NewsLetter from '../components/news_letter/NewsLetter'
import CompaniesBrand from '../components/company_brands/CompaniesBrand'

const About = () => {
  return (
    <>
      <AboutBanners/>
      <AboutTeams/>
      <AboutDetails/>
      <AllProducts/>
      <CompaniesBrand/>
      <NewsLetter/>
    </>
  )
}

export default About
