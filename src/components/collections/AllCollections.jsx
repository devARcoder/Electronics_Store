import React from 'react'
import Collections from './Collections'
import FeatureDetails from '../featured/FeatureDetails'
import CompaniesBrand from '../company_brands/CompaniesBrand'
import NewsLetter from '../news_letter/NewsLetter'
const AllCollections = () => {
  return (
    <>
    <FeatureDetails/>
      <Collections/>
      <AllProducts />
      <CompaniesBrand/>
      <NewsLetter/>
    </>
  )
}

export default AllCollections
