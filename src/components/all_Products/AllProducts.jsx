import React from "react";
import Featured from "./Featured";
import OnSale from "./OnSale";
import TopRated from "./TopRated";
import StartSell from "./StartSell";
const AllProducts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 px-4 my-14 md:px-24">
      <Featured />
      <OnSale />
      <TopRated />
      <StartSell />
    </div>
  );
};

export default AllProducts;
