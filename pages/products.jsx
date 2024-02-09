"use client";
import { Footer } from "@/components/Footer";
import React from "react";
import "../app/globals.scss";
import Header from "@/components/Header";
import ProductsMainSections from "@/components/ProductsMainSections";

const products = () => {
  return (
    <>
      <Header />
      <ProductsMainSections />
      <Footer />
    </>
  );
};

export default products;
