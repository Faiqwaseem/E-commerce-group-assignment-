import React, { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import FetchProduct from "../Services/FetchProduct";
import DealsHero from "../Components/DealsHero";
import ProductSlider from "../Components/ProductSlider";
const Deals = () => {



  // 🔥 Fetch products from same API as Home.jsx
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: FetchProduct,
  });
  const deals = data?.products || [];

  return (
    <div>


      <DealsHero />
      {/* <ProductSlider products={deals} /> */}


    </div>
  );
};

export default Deals;
