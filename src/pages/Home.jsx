import React from 'react'
import TopBanners from '../components/hero_section/TopBanners'
import Featured from '../components/featured/Featured'
import Deals from '../components/best_deals/Deals'
import Sellers from '../components/best_sellers/Sellers'
import HotProducts from '../components/hot_packs/HotProducts'
import Arrivals from '../components/new_arrivals/Arrivals'
import CompaniesBrand from '../components/company_brands/CompaniesBrand'
import AllProducts from '../components/all_Products/AllProducts'
import NewsLetter from '../components/news_letter/NewsLetter'

const Home = () => {
  return (
    <>
      <TopBanners/>
      <Featured/>
      <Deals/>
      <Sellers/>
      <HotProducts/>
      <Arrivals/>
      <AllProducts/>
      <CompaniesBrand/>
      <NewsLetter/>
    </>
  )
}

export default Home
