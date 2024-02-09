"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const navLinks = [
    { label: "Accueil", href: "/" },
    { label: "Soumission", href: "/quote" },
    {
      label: "Nos produits",
      href: "/products",
      // subLinks: [
      //   { label: "Quartz", href: "/nos-produits/quartz" },
      //   { label: "Granite", href: "/nos-produits/granite" },
      // ],
    },
    { label: "Nos réalisations", href: "/portfolio" },
    { label: "Nos fournisseurs", href: "/provider" },
    { label: "Blogue", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Nous joindre", href: "/contact" },
    // Add more navigation items as needed
    // Add language switcher if necessary
  ];
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMobileMenuToggle = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <header className="header py-2">
      <div className="flex-col md-flex md-justify-between items-center">
        <Link href="/" className="flex justify-center">
          {/* Insert your company logo here */}
          <img
            className="header-logo md:max-w-lg xl:max-w-xl"
            src="/images/logo_surfaces_nouvelle_ere.png"
            alt="Company Logo"
          />
        </Link>{" "}
        <div
          className={`flex justify-center p-2 lg:hidden ${
            showMobileMenu
              ? "header-icon header-icon-open transition-all duration-300 ease-in-out"
              : "header-icon header-icon-closed transition-all duration-300 ease-in-out"
          }`}
          onClick={handleMobileMenuToggle}
        >
          {showMobileMenu ? (
            <span className="text-white text-2xl">&#10005;</span> // Unicode "✕" character
          ) : (
            <span className="text-white text-2xl">&#9776;</span> // Unicode "☰" character
          )}
        </div>
      </div>
      <nav
        className={`items-center mt-2 ${
          showMobileMenu ? "visible flex flex-col" : "hidden"
        } lg:flex justify-center lg:space-x-4`} // Horizontally align and add spacing on md and larger screens
      >
        {navLinks.map((item, index) => (
          <div
            key={index}
            className={`${item.subLinks ? "dropdown" : ""} px-4 py-2 ${
              item.subLinks ? "mobile-submenu" : ""
            }`}
          >
            {item.subLinks ? (
              <div>
                {item.label}
                <ul className="dropdown-content mt-2 rounded-2xl">
                  {item.subLinks.map((subItem, subIndex) => (
                    <li key={subIndex} className="py-2 ps-4 pe-10">
                      <Link href={subItem.href}>{subItem.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link href={item.href}>{item.label}</Link>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Header;
