"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();
  const navLinks = [
    { label: "Accueil", href: "/" },
    { label: "Soumission", href: "/quote" },
    {
      label: "Nos produits",
      href: "/products",
    },
    { label: "Nos réalisations", href: "/portfolio" },
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
        <Link href="/" className="flex justify-center relative">
          {/* Insert your company logo here */}
          <div className="header-logo md:max-w-lg xl:max-w-xl">
            <Image
              src="/images/logo_surfaces_nouvelle_ere.png"
              alt="Surface Nouvelle Ere Logo"
              width={200} // Adjust width and height according to your image dimensions
              height={100}
              layout="responsive" // Make the image responsive
            />
          </div>
        </Link>{" "}
        <div
          className={`flex justify-center p-2 max-h-min lg:hidden ${
            showMobileMenu
              ? "header-icon header-icon-open transition-opacity duration-300 ease-in-out"
              : "header-icon header-icon-closed transition-opacity duration-300 ease-in-out"
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
            className={`${item.subLinks ? "dropdown" : ""} px-4 py-2 z-0 ${
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
              <Link
                href={item.href}
                onClick={() => setShowMobileMenu(false)}
                className={`${
                  path === item.href ||
                  path.split("/")[1] === item.href.split("/")[1]
                    ? "text-white underline underline-offset-4"
                    : "text-gray-300"
                } hover:text-white hover:underline hover:underline-offset-4`}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Header;
