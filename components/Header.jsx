"use client";
import React, { useState } from "react";
import Link from "next/link";
import image from "../../public/images/logo_surfaces_nouvelle_ere.png";
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
    // Add more navigation items as needed
    // Add language switcher if necessary
  ];
  const [showSubLinks, setShowSubLinks] = useState(false);

  const handleSubLinksToggle = () => {
    setShowSubLinks(!showSubLinks);
  };

  return (
    <header>
      <div className="d-flex justify-content-center">
        <Link href="/">
          {/* Insert your company logo here */}
          <img
            className="header-logo"
            src="/images/logo_surfaces_nouvelle_ere.png"
            alt="Company Logo"
          />
        </Link>
      </div>
      <nav className="navbar">
        <ul>
          {navLinks.map((item, index) => (
            <li key={index} className={item.subLinks ? "dropdown" : ""}>
              {item.subLinks ? (
                <div onClick={handleSubLinksToggle}>
                  {item.label}
                  {showSubLinks && (
                    <ul className="dropdown-content">
                      {item.subLinks.map((subItem, subIndex) => (
                        <li key={subIndex}>
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
