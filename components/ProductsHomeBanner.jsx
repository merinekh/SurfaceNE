import React from "react";
import ProductsMainSections from "./ProductsMainSections";

const ProductsBanner = () => {
  return (
    <>
      <div className="banner-content flex items-center justify-center w-full bg-gradient-to-r text-white pt-4">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            NOS PRODUITS
          </h2>
          <p className="text-base md:text-lg">
            Surfaces Nouvelle ère vous propose l'installation de comptoirs en :
          </p>

          {/* <div className="mt-8 space-x-4">
          <a
            href="/blogs/blogues-et-actualites/quartz"
            className="inline-block px-6 py-3 rounded-full bg-white text-black hover:bg-gray-300 transition duration-300 ease-in-out"
          >
            QUARTZ
          </a>
          <a
            href="/blogs/blogues-et-actualites/granite"
            className="inline-block px-6 py-3 rounded-full bg-white text-black hover:bg-gray-300 transition duration-300 ease-in-out"
          >
            GRANITE
          </a>
        </div> */}
        </div>
      </div>
      <ProductsMainSections />
    </>
  );
};

export default ProductsBanner;
