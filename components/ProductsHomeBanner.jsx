import React from "react";
import ProductsMainSections from "./ProductsMainSections";

const ProductsBanner = () => {
  return (
    <>
      <div className="banner-content flex items-center justify-center w-full bg-gradient-to-r text-white pt-4">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4 md:mb-6">
            NOS PRODUITS
          </h2>
          <p className="text-base md:text-lg">
            Surfaces Nouvelle ère vous propose l'installation de comptoirs en :
          </p>
        </div>
      </div>
      <ProductsMainSections />
    </>
  );
};

export default ProductsBanner;
