"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const navLinks = [
    { label: "Accueil", href: "/" },
    { label: "Soumission", href: "/soumission" },
    {
      label: "Nos produits",
      href: "/products",
      subLinks: [
        { label: "Quartz", href: "/nos-produits/quartz" },
        { label: "Granite", href: "/nos-produits/granite" },
      ],
    },
    { label: "Nos réalisations", href: "/portfolio" },
    { label: "Nos fournisseur", href: "/provider" },
    { label: "Blogue", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Nous joindre", href: "/contact" },
    // Add more navigation items as needed
    // Add language switcher if necessary
  ];
  const [showSubLinks, setShowSubLinks] = useState(false);

  const handleSubLinksToggle = () => {
    setShowSubLinks(!showSubLinks);
  };

  return (
    <header className="header py-5">
      <div className="flex justify-center">
        <Link href="/" className="p-2">
          {/* Insert your company logo here */}
          <img
            className="header-logo"
            src="/images/logo_surfaces_nouvelle_ere.png"
            alt="Company Logo"
          />
        </Link>
      </div>
      <nav className="flex justify-center mt-4">
        <ul className="flex justify-around">
          {navLinks.map((item, index) => (
            <li
              key={index}
              className={item.subLinks ? "dropdown" : "" + " px-4"}
            >
              {item.subLinks ? (
                <div onClick={handleSubLinksToggle}>
                  {item.label}
                  {showSubLinks && (
                    <ul className="dropdown-content mt-2 rounded-2xl">
                      {item.subLinks.map((subItem, subIndex) => (
                        <li key={subIndex} className="py-2 ps-4 pe-10">
                          <Link href={subItem.href}>{subItem.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link href={item.href}>{item.label}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
